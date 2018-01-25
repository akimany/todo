// it might be said:

const doneCont = document.getElementsByClassName('done_cont')[0]
const todoCont = document.getElementsByClassName('todo_cont')[0]

const Remove = element => {
  if (element.target && element.target.matches('.remove')) {
    const elementParent = element.target.parentNode
    const elementContainerSwitch =
      elementParent.parentNode.id === 'todo_cont' ? doneCont : todoCont
    // const elementContainer = elementParent.parentNode.id === 'todo_cont' ? todoCont : doneCont
    elementParent.remove()
    elementContainerSwitch.appendChild(elementParent)

    if (element.target.parentNode.parentNode.id === 'done_cont') {
      elementParent.firstChild.nextSibling.innerHTML = 'add_circle_outline'
    } else if (element.target.parentNode.parentNode.id === 'todo_cont') {
      elementParent.firstChild.nextSibling.innerHTML = 'remove_circle_outline'
    }
  }
}

export default Remove
