// it might be said:
const buttonContainer = document.getElementsByClassName('button_container')[0]

const newInput = document.createElement('input')
newInput.className = 'form-control add_new_list_val'

const newButton = document.createElement('button')
const newButtonTextNode = document.createTextNode('Click to add list')
newButton.appendChild(newButtonTextNode)
newButton.className = 'btn btn-primary add_new_list'

const containerDiv = document.createElement('div')
containerDiv.className = 'col-12 col-md-9'

containerDiv.appendChild(newInput)
containerDiv.appendChild(newButton)

const NewList = () => {
  buttonContainer.appendChild(containerDiv)
  // once button is shown, grey out the '+' button
}

export default NewList
