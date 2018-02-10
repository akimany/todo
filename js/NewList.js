// it might be said:
const buttonContainer = document.getElementsByClassName('button_container')[0]
const newInput = document.createElement('input')
newInput.className = 'form-control col-2'

// in progress - get a button to show an input for a new list on click
const NewList = () => {
  buttonContainer.appendChild(newInput)
}

export default NewList
