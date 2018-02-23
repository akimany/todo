// it might be said:
const buttonContainer = document.getElementsByClassName('button_container')[0]
const newInput = document.createElement('input')
newInput.className = 'form-control add_new_list'

const newDiv = document.createElement('div')
newDiv.className = 'col-12 col-md-9'

newDiv.appendChild(newInput)

const NewList = () => {
  buttonContainer.appendChild(newDiv)
}

export default NewList
