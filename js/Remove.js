// it might be said:
import $ from 'jquery'

const Remove = (e) => {
  $(e.currentTarget).closest('li').remove()
}

export default Remove
