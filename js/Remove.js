// it might be said:
// import $ from 'jquery'
// import ElementContent from './ElementContent'
import PrintElem from './AddDone'

const arr = []
const doneCont = document.getElementsByClassName('done_cont')[0]
const Remove = element => {
  const elementParent = element.target.parentNode
  elementParent.remove()
  arr.push(elementParent)
  PrintElem(elementParent, doneCont)
  // while (elementParent !== 'li') {
  // elementParent = elementParent.parentNode
  // }

  // removeChild(child);

  //  document.getElementsByClassName('done_cont')[0].appendChild(elementParent)
  // const elementText = $(element.currentTarget).closest('li').text()
  // return ElementContent(elementText)
}

export default Remove
