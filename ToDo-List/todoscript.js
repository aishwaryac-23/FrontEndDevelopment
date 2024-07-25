function addTodo(){
    var todoInput=document.getElementById("todo-input");
    var todoText=todoInput.value.trim();

    if(todoText!==""){
        var li=document.createElement("li");
        li.textContent=todoText;

var deleteButton=document.createElement("button");
deleteButton.textContent="Delete";
deleteButton.classList.add("delete-btn");
deleteButton.onclick=function(){
    li.remove();
}
li.appendChild(deleteButton);

document.getElementById("todo-list").appendChild(li);

todoInput.value="";

    }
}