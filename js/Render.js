// it might be said:
import LocalStorageWork from './LocalStorageWork'

// it might be said
// refactor with ES6 classes
const todoInput = document.getElementById('main-input')
const error = document.getElementsByClassName('error')[0]

const printError = () => {
  if (!todoInput.value) {
    error.style = 'display: flex; color: red'
    error.innerHTML = `Enter something into the field <i class="material-icons">arrow_upward</i>`
  }
}

const Render = element => {
  element.preventDefault() // stops page refresh - add button is type submit
  const todoInputVal = document.getElementsByClassName('todo_input')[0].value
    ? document.getElementsByClassName('todo_input')[0].value
    : printError()
  const todoCont = document.getElementsByClassName('todo_cont')[0]
  if (todoInput.value) {
    error.style = 'display: none'
    todoCont.innerHTML += `<li class="todoListItem">
                            <i class="move material-icons">remove_circle_outline</i>
                            <i class="delete material-icons">delete</i>
                            ${todoInputVal}
                         </li>`
  }
  LocalStorageWork()
}

export default Render
