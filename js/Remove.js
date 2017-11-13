// it might be said:
import $ from 'jquery'

// This removes the value on the page
// if this is an arrow function, the this keyword is not the event
const Remove = () => {
  const elem = $(this).parents('li')
  elem.remove()
}

export default Remove
