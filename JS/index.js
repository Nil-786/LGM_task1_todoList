var task = document.getElementById("taskin");
var completed = document.getElementById("completed");
task.addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        add();
    }
});
var taskArea = document.getElementById("main")
function add() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    var taskDiv = document.createElement("div");
    taskDiv.setAttribute("id", "taskdiv");
    var taskClose = document.createElement("div");
    taskClose.innerHTML += timeString + " " + "<span class='close' onclick='removeTask(this)'><i class='fa-solid fa-trash-can'></i></i></span>";
    var ele = document.createElement("p");
    ele.setAttribute("class", "n_task");
    var text = document.createTextNode(task.value);
    ele.appendChild(text);
    taskDiv.appendChild(ele);
    taskDiv.appendChild(taskClose);
    taskArea.appendChild(taskDiv);
    task.value = "";
    taskDiv.addEventListener("click", function () {
        if (ele.parentNode.parentNode.id == "main") {
            ele.style.textDecoration = "line-through";
            ele.innerHTML = "<i class='fa-solid fa-check'></i>" + " " + ele.innerHTML;
            completed.appendChild(taskDiv);
        }

    });
}
document.getElementById("complete-clear").addEventListener("click", function () {
    completed.innerHTML = " ";
});
function removeTask(closeSpan) {
    const task = closeSpan.parentElement.parentElement;
    task.remove();
}