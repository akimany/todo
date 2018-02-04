// it might be said:

const todoInput = document.getElementById('main-input')

const ReturnFocus = () => {
  todoInput.value = ''
  todoInput.focus()
}

export default ReturnFocus
