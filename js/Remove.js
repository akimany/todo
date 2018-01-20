// it might be said:
import PrintElem from './AddDone'

const arr = []
const doneCont = document.getElementsByClassName('done_cont')[0]
const Remove = element => {
  const elementParent = element.target.parentNode
  elementParent.remove()
  arr.push(elementParent)
  PrintElem(elementParent, doneCont)
}

export default Remove
