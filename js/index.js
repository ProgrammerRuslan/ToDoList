const $addTaskBtn = document.getElementById('todolist-btn')
const $toDoListInput = document.getElementById('todolist-input')
const $toDoList = document.getElementById('todolist')

$addTaskBtn.addEventListener('click', addBlock)

$toDoListInput.addEventListener('keydown', e => {
  if(e.code == 'Enter'){
    addBlock() 
  }
})

function doneTask() {
  // document.querySelectorAll('.todolist-block')
}

function removeTask() {
// document.querySelectorAll('.todolist-block')
}

function createItem(text) {
  return `
  <div class='todolist-block' data-id=${id}>
    <div class='todolist-text'>${text}</div>
    <div class='todolist-btns'>
      <button class='todolist-confirm'></button>
      <button class='todolist-delete'></button>
    </div>
  </div>  
  `
}

function addBlock(){
  if ($toDoListInput.value.trim() !== '') {
    $toDoList.insertAdjacentElement('beforeend', createItem($toDoListInput.value))
  } else {
    alert('Fill in the field!')
  } 
}