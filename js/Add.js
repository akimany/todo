// it might be said
import { $ } from 'jquery'

const Add = () => {
  const $doneCont = $('.done_cont')
  const elem = $(this).parents('li')
  $doneCont.append(elem)
}

export default Add
