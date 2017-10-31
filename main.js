// it might be said:
// Variables
var todoList = []
var doneList = []
var $todo_cont = $('.todo_cont')
var $done_cont = $('.done_cont')
var $todo_add = $('.todo_add')
var $todo_input = $('.todo_input')
var $todo_input_val

// This should add the value on the page
var tdAdd = () => {
    var elem = $(this).parents('li')
    $done_cont.append(elem)
    console.log('tdAdd');
}

//This remove the value on the page
// if this is an arrow function, the this keyword is not the event
var tdRemove = function() {
    var elem = $(this).parents('li')
    elem.remove()
    tdAdd()
}

//it might be said
var tdrender = () => {
    $todo_input_val = $('.todo_input').val() ? $('.todo_input').val() : 'empty ' + Math.floor(Math.random() * 10)
    $todo_cont.append('<li>' + $todo_input_val + '<span class=\"remove glyphicon glyphicon-remove\" aria-hidden=\"true\"></span>' + '</li>')
    tdClearReturnFocus()
}


var tdClearReturnFocus = () => {
    $todo_input.val('').focus()
}

//bind events
var init = () => {
    $todo_add.on('click', tdrender)
    $todo_cont.on('click', '.remove', tdRemove)
}

init()

// it might be said
//TODOS
// - clicking on the 'x' removes the item from the list - done
// - clicking on the 'x' adds that item to the new list - done
// - clicking on the 'x' removes that from the array
// - make a new array for the 'done' list - done

// Do something with the date and Math functions
