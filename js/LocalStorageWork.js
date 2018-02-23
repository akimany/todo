// it might be said:
// const newList = document.getElementsByClassName('new_list')[0]
// const addNewList = document.getElementsByClassName('add_new_list')[0]
const LocalStorageWork = () => {
  // const listName = 'New list' // this should be dynamic, from an input
  // const newListVal = newList.value

  // if other lists are available, option to select and load that list through a select
  const oldLists = []
  if (oldLists.length > 1) {
    for (let i = 0; i < oldLists.length; i += 1) {
      console.log(oldLists)
    }
  } else {
    // addNewList.focus()
    // return cursor to the add input box
  }

  // check if localstorage has a todo object
  // if it does,
  if (localStorage.length > 0) {
    const justLocalStorageObj = Object.keys(localStorage)
    console.log(justLocalStorageObj)
    for (let i = 0; i < justLocalStorageObj.length; i += 1) {
      console.log(localStorage[justLocalStorageObj[i]])
    }
  }
  // - for each new list in the object, make a new list
  // - for each list, populate the todo_cont with list items in the array of the list object
  // if it doesn't,
  //  - if the list is empty,
  // - add a new object
  // - add the list items to the array in that object
}

export default LocalStorageWork
