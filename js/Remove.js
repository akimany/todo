// it might be said:
import $ from 'jquery'

const Remove = (element) => {
  $(element.currentTarget).closest('li').remove()
  const elementText = $(element.currentTarget).closest('li').text()
  return elementText
}

export default Remove
