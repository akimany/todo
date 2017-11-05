// it might be said:

import { $ } from 'jquery'
import ReturnFocus from './ReturnFocus'

// it might be said
const Render = () => {
  const $todoCont = $('.todo_cont')
  const $todoInputVal = $('.todo_input').val()
    ? $('.todo_input').val()
    : 'empty'
  console.log($todoInputVal)
  $todoCont.append(
    `<li>${$todoInputVal}<span class="remove glyphicon glyphicon-remove" aria-hidden="true"></span></li>`
  )
  ReturnFocus()
}

export default Render
