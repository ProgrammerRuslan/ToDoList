document.querySelector('#todolist-btn').addEventListener('click', () => {
  addBlock()
})
document.querySelector('#todolist-input').addEventListener('keydown', function (event) {
  if (event.code == 'Enter') {
    addBlock()
  }
});
function addBlock(){
  if (document.querySelector('#todolist-input').value != '') {
    let todolistBlock = document.createElement('div')
    let todolistText = document.createElement('div')
    let todolistBtns = document.createElement('div')
    let todolistConfirm = document.createElement('button')
    let todolistDelete = document.createElement('button')

    todolistBlock.classList.add('todolist-block')
    todolistText.classList.add('todolist-text')
    todolistBtns.classList.add('todolist-btns')
    todolistConfirm.classList.add('todolist-confirm')
    todolistDelete.classList.add('todolist-delete')

    todolistText.innerText = document.querySelector('#todolist-input').value

    todolistBtns.append(todolistConfirm, todolistDelete)
    todolistBlock.append(todolistText, todolistBtns)
    document.querySelector('#todolist').append(todolistBlock)

    todolistConfirm.addEventListener('click', () => {
      todolistText.classList.add('active')
    })

    todolistDelete.addEventListener('click', () => {
      todolistBlock.remove()
    })
  }
  else {
    alert('Fill in the field!')
  } 
}