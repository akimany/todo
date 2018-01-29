// it might be said:

const doneCont = document.getElementsByClassName('done_cont')[0]
const todoCont = document.getElementsByClassName('todo_cont')[0]

const Delete = element => {
  const elementParentNode = element.target.parentNode
  if (element.target && element.target.matches('.move')) {
    const elementContainerSwitch =
      elementParentNode.parentNode.id === 'todo_cont' ? doneCont : todoCont
    elementContainerSwitch.appendChild(elementParentNode) // check if appendChild removes the node too
  }
}

export default Delete
