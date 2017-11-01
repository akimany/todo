// it might be said:

import { $ } from 'jquery'
import ReturnFocus from './ReturnFocus'

const $todoCont = $('.todo_cont')

// it might be said
const Render = () => {
  const $todoInputVal = $('.todo_input').val()
    ? $('.todo_input').val()
    : 'empty'
  $todoCont.append(
    `<li>${$todoInputVal}<span class="remove glyphicon glyphicon-remove" aria-hidden="true"></span></li>`
  )
  ReturnFocus()
}

export default Render
