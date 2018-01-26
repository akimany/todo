// it might be said:
import $ from 'jquery'

const LocalStorageWork = () => {
  const listName = 'New list' // this should be dynamic, from an input
  const $todoInputVal = $('.todo_input').val()
    ? $('.todo_input').val()
    : 'empty'

  const listObject = {
    listName,
  }

  console.log(JSON.parse(localStorage.getItem('todo')))

  listObject.todoList = JSON.parse(localStorage.getItem('todo'))
    ? JSON.parse(localStorage.getItem('todo'))
    : localStorage.setItem('todo', JSON.stringify(listObject))

  listObject.todoList.push(JSON.stringify($todoInputVal))

  localStorage.setItem('todo', JSON.stringify(listObject))
}

export default LocalStorageWork
