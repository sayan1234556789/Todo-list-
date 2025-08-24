const inputbox = document.getElementById("input_box");
const task_list = document.querySelector(".list");

function addTask() {
    if (inputbox.value.trim() === "") {  //trim to remove whitespace
        alert('Fill the task first');
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        task_list.appendChild(li);
        inputbox.value = "";  // Clear the input box after adding the task
        saveTasks();  // Save tasks to local storage after adding a new task

        //now adding the cross button
        let span = document.createElement("span");
        span.innerHTML = "\u00D7";  // Unicode for multiplication sign (cross)
        li.appendChild(span);
    }
}

task_list.addEventListener('click', function(event){
    if(event.target.tagName === "LI") {
        event.target.classList.toggle("checked");
        saveTasks();  // Save tasks to local storage after toggling the checked state
    }
    else if(event.target.tagName === "SPAN") {
        event.target.parentElement.remove();  // Remove the task when the cross is clicked
        saveTasks();  // Save tasks to local storage after removing a task
    }
},false)

//saving the tasks in local storage
function saveTasks() {
    localStorage.setItem("tasks", task_list.innerHTML);
}
function showTasks() {
    task_list.innerHTML = localStorage.getItem("tasks") || "";  // Load tasks from local storage
}
showTasks()