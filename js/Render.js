// it might be said:
import $ from 'jquery'

// it might be said
const Render = () => {
  const todoCont = document.getElementsByClassName('todo_cont')
  const $todoInputVal = $('.todo_input').val()
    ? $('.todo_input').val()
    : 'empty'
  todoCont[0].innerHTML = `<li>
                          ${$todoInputVal}
                          <span class="remove octicon octicon-x" aria-hidden="true"></span>
                        </li>`

}

export default Render
