// it might be said:
const buttonContainer = document.getElementsByClassName('button_container')[0]

const newInput = document.createElement('input')
newInput.className = 'form-control add_new_list_val'

const newButton = document.createElement('button')
const newButtonTextNode = document.createTextNode('Click to add list')
newButton.appendChild(newButtonTextNode)
newButton.className = 'btn btn-primary add_new_list'

const colDiv = document.createElement('div')
colDiv.className = 'col-12 col-md-9'

const rowDiv = document.createElement('div')
rowDiv.className = 'row'

colDiv.appendChild(rowDiv)
rowDiv.appendChild(newInput)
rowDiv.appendChild(newButton)

const NewList = () => {
  buttonContainer.appendChild(colDiv)
  // once button is shown, grey out the '+' button
}

export default NewList
