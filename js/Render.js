// it might be said:
import $ from 'jquery'
import LocalStorageWork from './LocalStorageWork'

// it might be said
const Render = () => {
  const $todoInputVal = $('.todo_input').val()
    ? $('.todo_input').val()
    : 'empty'
  const todoCont = document.getElementsByClassName('todo_cont')[0]

  todoCont.innerHTML += `<li class="todoListItem">${$todoInputVal}<i class="remove material-icons">remove_circle_outline</i></li>`

  LocalStorageWork()
}

export default Render
