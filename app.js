var list = document.getElementById("list");

function addToDo(){
    var inpTodo = document.getElementById("todoItem");
    var li = document.createElement("li");
    var todoText = document.createTextNode(inpTodo.value)
    li.appendChild(todoText)
    li.setAttribute("class","todo-li")



    var span =document.createElement("span")
    var dlt = document.createElement("button");
    var dltText = document.createTextNode("\u00D7")
    span.appendChild(dlt)
    dlt.appendChild(dltText)
    li.appendChild(span)
    dlt.setAttribute("class","dltBtn")
    dlt.setAttribute("onclick","dltRow(this)")


    var edit = document.createElement("button")
    var editText = document.createTextNode("edit")
    edit.appendChild(editText)
    li.appendChild(edit)
    edit.setAttribute("class","editBtn")
    edit.setAttribute("onclick","editlist(this)")
    list.appendChild(li)


    inpTodo.value=""

}
function allDelete(){
   list.innerHTML = ""
}


function dltRow(e){
    e.parentNode.parentNode.remove()
}
function editlist(edit){
    var liValue = edit.parentNode.childNodes[0].nodeValue
    var newTodo = prompt("Update your to-do ",liValue)
    edit.parentNode.childNodes[0].nodeValue = newTodo
}