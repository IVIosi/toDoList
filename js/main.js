"use strict";

class Task {
  constructor(title, completed, editing) {
    this.taskTitle = title;
    this.completed = completed;
    this.editMode = editing;
  }
  renderTask() {
    //creating inner elements
    //main li element
    var listItem = document.createElement("li");
    listItem.setAttribute("id", this.taskTitle);
    //main completed checkbox
    var checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    checkBox.addEventListener("click", () => this.markAsCompleted());
    //edit box input
    var editBox = document.createElement("input");
    editBox.setAttribute("type", "text");
    editBox.setAttribute("value", this.taskTitle);
    editBox.className = "editBox";
    //task title
    var listItemText = document.createElement("div");
    listItemText.setAttribute("class", "taskTitle");
    listItemText.textContent = this.taskTitle;
    //edit button
    var editButton = document.createElement("button");
    editButton.addEventListener("click", () => this.editTask());
    var editButtonSpan = document.createElement("span");
    editButtonSpan.textContent = "Edit";
    //remove button
    var removeButton = document.createElement("button");
    removeButton.addEventListener("click", () => this.removeTask());
    var removeButtonSpan = document.createElement("span");
    removeButtonSpan.textContent = "Remove";
    //appending all inner elements
    listItem.appendChild(checkBox);
    listItem.appendChild(editBox);
    listItem.appendChild(listItemText);
    listItem.appendChild(editButton);
    editButton.appendChild(editButtonSpan);
    listItem.appendChild(removeButton);
    removeButton.appendChild(removeButtonSpan);
    document.getElementById("tasks").appendChild(listItem);
  }
  markAsCompleted() {
    this.completed = !this.completed;
    var taskItem = document.getElementById(this.taskTitle);
    if (this.completed) {
      taskItem.className = "completed";
    } else {
      taskItem.className = "";
    }
  }
  editTask() {
    this.editMode = !this.editMode;
    var taskItem = document.getElementById(this.taskTitle);
    if (this.editMode) {
      //going to edit mode
      taskItem.className = "editMode";
    } else {
      //saving changes by removing current task and add new task
      taskItem.className = "";
      this.taskTitle = taskItem.childNodes[1].value;
      taskItem.parentNode.removeChild(taskItem);
      var newTask = new Task(this.taskTitle, false, false);
      newTask.renderTask();
    }
  }
  removeTask() {
    var taskItem = document.getElementById(this.taskTitle);
    taskItem.parentNode.removeChild(taskItem);
  }
}

const addTask = () => {
  var taskTitle = document.getElementById("newTaskTitle").value;
  if (taskTitle !== "") {
    var newTask = new Task(taskTitle, false, false);
    newTask.renderTask();
  } else {
    alert("Task can't be empty!");
  }
};

const sampleTask = new Task("sample", false, false);
sampleTask.renderTask();
