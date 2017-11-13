// it might be said:

import $ from 'jquery'

const ReturnFocus = () => {
  const $todoInput = $('.todo_input')
  $todoInput.val('').focus()
}

export default ReturnFocus
