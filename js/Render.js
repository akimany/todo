// it might be said:
import $ from 'jquery'
import LocalStorageWork from './LocalStorageWork'

// it might be said
const printError = () => {
  console.log('print error')
}

const Render = () => {
  const $todoInputVal = $('.todo_input').val()
    ? $('.todo_input').val()
    : printError()
  const todoCont = document.getElementsByClassName('todo_cont')[0]

  todoCont.innerHTML += `<li class="todoListItem">${$todoInputVal}
                            <i class="move material-icons">remove_circle_outline</i>
                            <i class="delete material-icons">delete</i>
                         </li>`
  LocalStorageWork()
}

export default Render
