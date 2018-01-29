// it might be said:
import Delete from './Delete'

const Move = element => {
  Delete(element)

  const elementParentNode = element.target.parentNode
  if (element.target.parentNode.parentNode.id === 'done_cont') {
    elementParentNode.firstChild.nextSibling.innerHTML = 'add_circle_outline'
  } else if (element.target.parentNode.parentNode.id === 'todo_cont') {
    elementParentNode.firstChild.nextSibling.innerHTML = 'remove_circle_outline'
  }
}

export default Move
