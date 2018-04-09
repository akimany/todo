// it might be said

const MakeNewList = () => {
  const justLocalStorageObj = Object.keys(localStorage)
  const todoListsDiv = document.getElementsByClassName('todoLists')[0]
  for (let i = 0; i < justLocalStorageObj.length; i += 1) {
    const listName = justLocalStorageObj[i]
    const listHeading = document.createElement('h2')
    const listHeadingNode = document.createTextNode(listName)
    listHeading.appendChild(listHeadingNode)
    todoListsDiv.appendChild(listHeading)
    // - for each new list in the object, make a new list
  }
}

export default MakeNewList
