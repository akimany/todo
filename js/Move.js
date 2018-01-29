// it might be said:
import Delete from './Delete'

const Move = element => {
  Delete(element)
  const elementParentNode = element.target.parentNode
  if (
    elementParentNode.parentNode != null &&
    elementParentNode.parentNode.id === 'done_cont'
  ) {
    elementParentNode.firstChild.nextSibling.innerHTML = 'add_circle_outline'
  } else if (
    elementParentNode.parentNode != null &&
    elementParentNode.parentNode.id === 'todo_cont'
  ) {
    elementParentNode.firstChild.nextSibling.innerHTML = 'remove_circle_outline'
  }
}

export default Move
