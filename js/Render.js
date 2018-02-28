// it might be said
const todoInput = document.getElementById('main-input')

const printError = () => {
  if (!todoInput.value) {
    todoInput.className += ' is-invalid'
  }
}

const Render = element => {
  element.preventDefault() // stops page refresh - add button is type submit
  const todoInputVal = document.getElementsByClassName('todo_input')[0].value
    ? document.getElementsByClassName('todo_input')[0].value
    : printError()
  const todoCont = document.getElementsByClassName('todo_cont')[0]
  if (todoInput.value) {
    todoInput.classList.remove('is-invalid')
    todoCont.innerHTML += `<li class="todoListItem">
                            <i class="move material-icons">remove_circle_outline</i>
                            <i class="delete material-icons">delete</i>
                            ${todoInputVal}
                         </li>`
  }
}

export default Render
