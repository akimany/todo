// it might be said:

import { $ } from 'jquery'

const $todoInput = $('.todo_input')

const ReturnFocus = () => {
  $todoInput.val('').focus()
}

export default ReturnFocus
