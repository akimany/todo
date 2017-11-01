// it might be said
import { $ } from 'jquery'

const $doneCont = $('.done_cont')

const Add = () => {
  const elem = $(this).parents('li')
  $doneCont.append(elem)
}

export default Add
