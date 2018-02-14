// it might be said:
const buttonContainer = document.getElementsByClassName('button_container')[0]
const newInput = document.createElement('input')
newInput.className = 'form-control'

const newDiv = document.createElement('div')
newDiv.className = 'col-12 col-sm-9'

newDiv.appendChild(newInput)

// in progress - get a button to show an input for a new list on click
const NewList = () => {
  buttonContainer.appendChild(newDiv)
}

export default NewList
