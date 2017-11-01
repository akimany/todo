// it might be said:
import { $ } from 'jquery'
import Add from './Add'
import Remove from './Remove'
import Render from './Render'

// Variables
const $todoAdd = $('.todo_add')

// This should add the value on the page
// const tdAdd = () => {
//   const elem = $(this).parents('li')
//   $doneCont.append(elem)
// }

// bind events
const init = () => {
  $todoAdd.on('click', Render)
  // $todoCont.on('click', '.remove', tdRemove)
}

init()

// it might be said
// TODOS
// - clicking on the 'x' removes the item from the list
// - clicking on the 'x' adds that item to the new list
// - clicking on the 'x' removes that from the array
// - make a new array for the 'done' list - done

// Do something with the date and Math functions
