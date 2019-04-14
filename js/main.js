"use strict";

class Task {
  constructor(title, completed) {
    this.taskTitle = title;
    this.completed = completed;
  }
  renderTask() {
    //creating inner elements
    var listItem = document.createElement("li");
    listItem.setAttribute("id", this.taskTitle);
    var checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    checkBox.addEventListener("click", this.markAsCompleted.bind(this));
    var listItemText = document.createElement("div");
    listItemText.setAttribute("class", "taskTitle");
    listItemText.textContent = this.taskTitle;
    var editButton = document.createElement("button");
    editButton.addEventListener("click", this.editTask.bind(this));
    var editButtonSpan = document.createElement("span");
    editButtonSpan.textContent = "Edit";
    var removeButton = document.createElement("button");
    removeButton.addEventListener("click", this.removeTask.bind(this));
    var removeButtonSpan = document.createElement("span");
    removeButtonSpan.textContent = "Remove";
    //appending all inner elements
    listItem.appendChild(checkBox);
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
    console.log("edit");
  }
  removeTask() {
    var taskItem = document.getElementById(this.taskTitle);
    taskItem.parentNode.removeChild(taskItem);
  }
}

const addTask = () => {
  var taskTitle = document.getElementById("newTaskTitle").value;
  if (taskTitle !== "") {
    var newTask = new Task(taskTitle, false);
    newTask.renderTask();
  } else {
    alert("Task can't be empty!");
  }
};

const sampleTask = new Task("sample", false);
sampleTask.renderTask();
