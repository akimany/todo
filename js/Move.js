// it might be said:
import Delete from './Delete'

const Move = element => {
  if (element.target && element.target.matches('.move')) {
    const elementParent = element.target.parentNode
    if (element.target.parentNode.parentNode.id === 'done_cont') {
      elementParent.firstChild.nextSibling.innerHTML = 'add_circle_outline'
    } else if (element.target.parentNode.parentNode.id === 'todo_cont') {
      elementParent.firstChild.nextSibling.innerHTML = 'remove_circle_outline'
    }
    Delete(elementParent)
  }
}

export default Move
