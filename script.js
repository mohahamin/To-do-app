const InputBox = document.getElementById("input_box");
const TasksContainer = document.getElementById("tasksContainer");
const generalContainer = document.getElementById("container");
const darkToggle = document.getElementById("darkToggle");
// add task to tasks body
function addTask() {
  // check if input box is empty
  if (InputBox.value === "" || InputBox.value === " ") {
    alert("You must input something");
  } else {
    // build task body
    let task = document.createElement("div");
    task.classList.add("task");
    // add task text to task body
    let para = document.createElement("p");
    para.appendChild(document.createTextNode(InputBox.value));
    task.appendChild(para);
    // add delete icon to task body
    let deleteIcon = document.createElement("span");
    deleteIcon.classList.add("material-symbols-outlined", "delete_btn");
    deleteIcon.appendChild(document.createTextNode("disabled_by_default"));
    task.appendChild(deleteIcon);
    // add task to task container
    TasksContainer.appendChild(task);
  }
  //   clear input box after adding task
  InputBox.value = " ";
  //   save task data to local storage
  saveData();
}
// delete, toggle task status function
TasksContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.classList.contains("delete_btn")) {
      e.target.parentElement.remove();
    } else if (e.target.tagName === "DIV") {
      e.target.classList.toggle("done");
    }
    // save task status in local storage
    saveData();
  },
  false
);
// dark mode function
function darkMode() {
  if (
    generalContainer.parentElement.classList.contains("dark") &&
    TasksContainer.parentElement.classList.contains("dark") &&
    InputBox.classList.contains("dark") &&
    darkToggle.classList.contains("dark")
  ) {
    generalContainer.parentElement.classList.remove("dark");
    TasksContainer.parentElement.classList.remove("dark");
    InputBox.classList.remove("dark");
    darkToggle.classList.remove("dark");
  } else {
    generalContainer.parentElement.classList.add("dark");
    TasksContainer.parentElement.classList.add("dark");
    InputBox.classList.add("dark");
    darkToggle.classList.add("dark");
  }
  saveData();
}
// save data in local storage function
function saveData() {
  localStorage.setItem("data", TasksContainer.innerHTML);
    localStorage.setItem("data", generalContainer.innerHTML);
}
// get data from local storage function
function getData() {
  TasksContainer.innerHTML = localStorage.getItem("data");
}
// call getData() function to get data from local storage when refresh or re-open the browser
getData();
