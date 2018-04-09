import MakeNewList from './MakeNewList'

// it might be said:
// const newList = document.getElementsByClassName('new_list')[0]

const LocalStorageWork = () => {
  // const listName = 'New list' // this should be dynamic, from an input
  // const newListVal = newList.value
  const holdOldListNames = Object.keys(localStorage)
  console.log(holdOldListNames)
  // if other lists are available, option to select and load that list through a select
  // Function to make a select, populated with options from Object keys in localStorage
  holdOldListNames.map(element => {
    const select = document.createElement('select')
    const optionText = document.createTextNode(element)
    const option = document.createElement('option')
    option.appendChild(optionText)
    select.appendChild(option)
    return select
  })

  // check if localstorage has a todo object
  // if it does,
  // const addNewList = document.getElementsByClassName('add_new_list')[0]
  // it might be said:
  if (localStorage.length > 0) {
    MakeNewList()
  }

  // localStorage.setItem(addNewList.value, JSON.stringify({ item1: 'item1' }))

  // - for each list, populate the todo_cont with list items in the array of the list object
  // if it doesn't,
  //  - if the list is empty,
  // - add a new object
  // - add the list items to the array in that object
}

export default LocalStorageWork
