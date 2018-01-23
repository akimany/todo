// it might be said:
import Render from './Render'
import Remove from './Remove'
// it might be said:

const todoAdd = document.getElementsByClassName('todo_add')[0]

const todoCont = document.getElementById('todo_cont')
const doneCont = document.getElementById('done_cont')

todoCont.addEventListener('click', Remove)
doneCont.addEventListener('click', Remove)

todoAdd.addEventListener('click', Render)

// bind events

// it might be said
// TODOS
// - clicking on the 'x' removes the item from the list
// - clicking on the 'x' adds that item to the new list
// - clicking on the 'x' removes that from the array
// - make a new array for the 'done' list - done

// Do something with the date and Math functions
