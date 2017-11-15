// it might be said:
import $ from 'jquery'
import Render from './Render'
import Remove from './Remove'

// Variables
const $todoAdd = $('.todo_add')
const todoCont = document.getElementsByClassName('todo_cont')

$todoAdd.on('click', Render)
$(todoCont).on('click', '.remove', Remove)


// bind events

// it might be said
// TODOS
// - clicking on the 'x' removes the item from the list
// - clicking on the 'x' adds that item to the new list
// - clicking on the 'x' removes that from the array
// - make a new array for the 'done' list - done

// Do something with the date and Math functions
