// it might be said

// This should add the value on the page
var tdAdd = () => {
  var elem = $(this).parents('li')
  $done_cont.append(elem)
  console.log('tdAdd')
}

export tdAdd 
