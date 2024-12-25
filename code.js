const taskInput=document.querySelector("#taskinput");
const taskList=document.querySelector("#taskList");
function addTask(){
    const taskText= taskInput.value.trim();
    if(taskText===""){
        alert("please enter a task");
        return;
    }
    const taskItem=document.createElement("li");
    textItem.textContent=taskText;
    const deleteBtn=document.createElement("button");
    deleteBtn.textContent="Delete";
    deleteBtn.classList.add("deleteBtn");
    deleteBtn.onclick= function(){
        taskList.removeChild(taskItem);
    };
    taskItem.appendChild(deleteBtn);
    taskList.appendChild(taskItem);
    taskInput.value="";
}
