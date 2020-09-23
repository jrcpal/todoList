const form = document.querySelector('#add-task');
const taskBox = document.querySelector('#task-box');
const taskList = document.querySelector('#task-list');
const results = document.querySelector('#results');
const allDone = document.querySelector('#all-done');
const allClear = document.querySelector('#all-clear');
//const allClear = document.querySelector('#all-clear');

// add item to todo list
form.addEventListener( 'submit', function(event) {
  event.preventDefault();
  allDone.style.display = 'block'
  allClear.style.display = 'block'

  const newTask = document.createElement('li');
  const doneBtn = document.createElement('input');

  doneBtn.setAttribute("type", "checkbox")
  doneBtn.className += "checkbox"
  
  newTask.innerText = taskBox.value;
  newTask.appendChild(doneBtn);
  taskList.appendChild(newTask)
  taskBox.value = '';


});

//Marking all done worked! But now strikethrough isn't working when i click a single checkbox. Ah, for later

  // toggle strike out item from todo list upon click to doneBtn 
  taskList.addEventListener('click', function(event) {
    const doneBtn = document.querySelector('input[type="checkbox"');
    if (event.target.tagName === 'INPUT') {
      const { checked } = doneBtn;
      if (checked) {
        event.target.parentElement.style.textDecoration = "line-through"
        event.target.parentElement.checked = "true";
      } else {
        event.target.parentElement.style.textDecoration = "none";
      }
    }
  });


// clear all items from todo list by adding button to bottom of form (only if one element already exists)
allClear.addEventListener('click', function(event){
  taskList.innerHTML = ''
  allClear.style.display = "none"
  allDone.style.display = "none"
})

 //second attempt at marking all checkboxes as done according to Array.from and .filter demo
 allDone.addEventListener('click', function(event) {
  const allCheckboxes = document.querySelectorAll('input[type="checkbox"');

  const notChecked = Array.from(allCheckboxes).filter(function(box) {
  return !box.checked;
  });
  //now, I want to toggle all that are not checked to checked using .map
  const notCompletedTasks = notChecked.map(function(checkbox) {
    checkbox.parentElement.style.textDecoration = "line-through";
    checkbox.checked = "true";
  });
});


 
 
//first attempt
//toggle all items at once (couldn't get checkbox to work)
//  allDone.addEventListener('click', function(event) {
//   const lis = document.querySelectorAll('li');
//   const checkboxes = document.querySelectorAll('.checkbox')
//   for (let li of lis) {
//     li.style.textDecoration = 'line-through'
//   }
//   for (let checkbox of checkboxes) {
//     checkbox.value = "checked"
//   }
//  })