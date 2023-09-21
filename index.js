let task = document.getElementById("Task-El")
let description = document.getElementById("description-el")
var date = document.getElementById("completionDate-el")
let addTaskBtn = document.getElementById("addTask-btn")
let ToDos= document.getElementById("theTask")
let saveTaskBtn= document.getElementById("completed")
let checkbox= document.getElementById("checkbox")
let completed = document.getElementById("completedTasks")
let uncompleted = document.getElementById("uncompleted")
let UncompletedTasks = document.getElementById("UncompletedTasks")
let completeBtn= document.getElementById("complete-btn")
const taskArr = []
var taskObj =   {
  task: "",
  Description: "",
  date: "",
  completed: false,
  id: Math.floor( Math.random()*1000)
}
task.addEventListener("input", function(event){
  taskObj.task = event.target.value
})
description.addEventListener("input", function(event){
  taskObj.Description= event.target.value
})
date.addEventListener("input",function(event){
  taskObj.date = event.target.value
})
function cloneTodo() {
  let clone = {};
  for(let key in taskObj) {
    if(taskObj.hasOwnProperty(key)) {
      clone[key] = taskObj[key];
    }
  }
  return clone;
}
addTaskBtn.addEventListener("click", (event)=>  {
  taskObj.id = Math.floor( Math.random()*1000)
  console.log(taskObj)
  console.log(taskArr);
  let result = taskArr
  task.value= ""
 date.value= ""
  description.value = ""
  if(taskArr){
    taskArr.push( cloneTodo(taskObj) )
  localStorage.setItem("MyTodos", JSON.stringify(taskArr))
  ToDos.innerHTML+= `<li><span id="task">Task:${taskObj.task}</span> <span id= "description">Description: ${taskObj.Description}</span> <span id= "date">Completion Date: ${taskObj.date}</span></li><span><button class="complete-todo" data-id = "${taskObj.id}">Completed</button></span>`
  }
})
let StoredArray= localStorage.getItem("MyTodos")
StoredArray=JSON.parse(StoredArray)
for(let i =0; i<StoredArray.length; i++){
  ToDos.innerHTML+=  `<li><span id="task">Task:${StoredArray[i].task}</span> <span id= "description">Description: ${StoredArray[i].Description}</span> <span id= "date">Completion Date: ${StoredArray[i].date}</span></li><span><button class="complete-todo" data-id="${StoredArray[i].id}">Completed</button></span>`   
}
let completeButn = document.querySelectorAll(".complete-todo");
completeButn.forEach(function(button) {
  button.addEventListener("click", function(event) {
console.log(34567)
console.log(StoredArray);
      let completeId = button.getAttribute("data-id"); 
      console.log(completeId);
      StoredArray.forEach(function(task) {
          if(task.id == completeId) {
              if(task.completed) { 
                task.completed = false;
              } else if(! task.completed){ 
                  task.completed = true;
              }
          }
      })
      localStorage.setItem("todos", JSON.stringify(StoredArray)); 
  })
})
let StoredArrayofTrue= localStorage.getItem("todos")
 StoredArrayofTrue=JSON.parse(StoredArrayofTrue)
 console.log(StoredArrayofTrue);

 for(let i =0; i<StoredArrayofTrue.length; i++){
  if(StoredArrayofTrue[i].completed==true){
   completed.innerHTML+=  `<li><span id="task">Task:${StoredArrayofTrue[i].task}</span> <span id= "description">Description: ${StoredArrayofTrue[i].Description}</span> <span id= "date">Completion Date: ${StoredArrayofTrue[i].date}</span> <button class="delete" data-id="${StoredArrayofTrue[i].id}">Delete</buttton></li>`   
}}
 let deletebtn= document.querySelectorAll(".delete"); 
 deletebtn.forEach(function(button) { 
     button.addEventListener("click", function(event) {
         let deleteId = button.getAttribute("data-id"); 
         StoredArrayofTrue.forEach((element) =>{
          console.log(deleteId);
             if(element.id == deleteId) {
                 StoredArrayofTrue.splice(element, 1)
             }
         })
         localStorage.setItem("todos", JSON.stringify(StoredArrayofTrue)); // re-save new todo in localStorage
         location.reload();
     })
 })
 