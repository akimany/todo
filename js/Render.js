// it might be said:
import $ from 'jquery'

// it might be said
const Render = () => {
  const $todoInputVal = $('.todo_input').val() ? $('.todo_input').val() + Math.ceil(Math.random() * 10) : 'empty'

  document.getElementsByClassName('todo_cont')[0].innerHTML += `<li class="todoListItem">
                          ${$todoInputVal}
                          <span class="remove octicon octicon-x" aria-hidden="true"></span>
                        </li>`
}

export default Render
