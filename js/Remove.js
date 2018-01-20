// it might be said:
import Move from './Move'

const doneCont = document.getElementsByClassName('done_cont')[0]
const todoCont = document.getElementsByClassName('todo_cont')[0]

const Remove = element => {
  if (element.target && element.target.matches('span.remove')) {
    const elementParent = element.target.parentNode
    const elementContainer =
      elementParent.parentNode.id === 'todo_cont' ? doneCont : todoCont
    elementParent.remove()
    Move(elementParent, elementContainer)
  }
}

export default Remove
