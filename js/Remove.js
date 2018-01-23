// it might be said:

const doneCont = document.getElementsByClassName('done_cont')[0]
const todoCont = document.getElementsByClassName('todo_cont')[0]

const Remove = element => {
  if (element.target && element.target.matches('.remove')) {
    const elementParent = element.target.parentNode
    const elementContainerSwitch =
      elementParent.parentNode.id === 'todo_cont' ? doneCont : todoCont
    const elementContainer =
      elementParent.parentNode.id === 'todo_cont' ? todoCont : doneCont

    elementParent.remove()
    elementContainerSwitch.appendChild(elementParent)
  }
}

export default Remove
