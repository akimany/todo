// it might be said:

const doneCont = document.getElementsByClassName('done_cont')[0]
const todoCont = document.getElementsByClassName('todo_cont')[0]

const Delete = element => {
  const elementContainerSwitch =
    element.parentNode.id === 'todo_cont' ? doneCont : todoCont
  elementContainerSwitch.appendChild(element) // check if appendChild removes the node too
}

export default Delete
