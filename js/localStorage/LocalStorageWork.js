// import MakeSelectList from './MakeSelectList'

// it might be said:

const LocalStorageWork = () => {
  // const listName = 'New list' // this should be dynamic, from an input
  // const newListVal = newList.value
  // const localStorageArray = []
  const localArray = []
  Object.keys(localStorage).forEach((element, index) => {
    const newObj = {
      index,
      name: element,
      mainData: JSON.parse(localStorage.getItem(element))
    }
    localArray.push(newObj)
  })

  const localListItems = localArray
    .map(element => {
      const listItem = document.createElement('option')
      const textNode = document.createTextNode(element.name)
      listItem.appendChild(textNode)
      return listItem
    })
    .join()

  console.log(localListItems, document.getElementsByClassName('todoLists'))
  // next step is to stick the options into a select *****here******

  // if other lists are available, option to select and load that list through a select
  // Function to make a select, populated with options from Object keys in localStorage

  // check if localstorage has a todo object
  // if it does,
  // const addNewList = document.getElementsByClassName('add_new_list')[0]
  // it might be said:

  // - for each list, populate the todo_cont with list items in the array of the list object
  // if it doesn't,
  //  - if the list is empty,
  // - add a new object
  // - add the list items to the array in that object
}

export default LocalStorageWork
