// it might be said:

const holdOldListNames = arr =>
  arr.map(element => {
    const select = document.createElement('select')
    const optionText = document.createTextNode(element)
    const option = document.createElement('option')
    option.appendChild(optionText)
    select.appendChild(option)
    return select
  })
export default holdOldListNames
