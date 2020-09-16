// define UI variables
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

// load all event listeners
loadEventListeners();

// load all event listeners
function loadEventListeners() {
  // DOM load event
  document.addEventListener("DOMContentLoaded", getTasks);

  // add task form
  form.addEventListener("submit", addTask);

  // remove task event
  taskList.addEventListener("click", removeTask);

  //clear task event
  clearBtn.addEventListener("click", clearTasks);

  // filter tasks event
  filter.addEventListener("keyup", filterTask);
}

// add task
function addTask(e) {
  if (taskInput.value === "") {
    alert("Task can't be blank!");
  } else {
    // create li
    const li = document.createElement("li");
    li.className = "collection-item";

    // create text node and appens to li
    li.appendChild(document.createTextNode(taskInput.value));

    // new link element
    const link = document.createElement("a");
    link.className = "delete-item secondary-content";
    link.innerHTML = '<i class="fa fa-times"></i>';
    li.appendChild(link);

    // append to the ul
    taskList.appendChild(li);

    // store in localStorage
    storeTaskInLocalStorage(taskInput.value);

    // clear the input
    taskInput.value = "";
  }

  e.preventDefault();
}

// remove task
function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are you sure?")) {
      e.target.parentElement.parentElement.remove();

      // remove from localStorage
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
}

// to clear all tasks
function clearTasks() {
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }

  // clear tasks from localStorage
  clearTasksFromLocalStorage();
}

// filter the tasks
function filterTask(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll(".collection-item").forEach(function (task) {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
}

// store tasks in localStorage
function storeTaskInLocalStorage(task) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    //  if empty
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.push(task);
  console.log(tasks, task);

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// get tasks from localStorage
function getTasks() {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    //  if empty
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.forEach(function (task) {
    // create li
    const li = document.createElement("li");
    li.className = "collection-item";

    // create text node and appens to li
    li.appendChild(document.createTextNode(task));

    // new link element
    const link = document.createElement("a");
    link.className = "delete-item secondary-content";
    link.innerHTML = '<i class="fa fa-times"></i>';
    li.appendChild(link);

    // append to the ul
    taskList.appendChild(li);
  });
}

// delete from local storage
function removeTaskFromLocalStorage(taskItem) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    //  if empty
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.forEach(function (task, index) {
    if (taskItem.textContent === task) {
      tasks.splice(index, 1);
    }
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// clear all the data from local storage
function clearTasksFromLocalStorage() {
  localStorage.clear();
}
