// it might be said:
import Render from './Render'
import Move from './Move'
import ReturnFocus from './ReturnFocus'
import NewList from './NewList'
import LocalStorageWork from './LocalStorageWork'
import RemoveError from './RemoveError'

const todoAdd = document.getElementsByClassName('todo_add')[0]
const newListBtn = document.getElementsByClassName('new_list')[0]
const todoCont = document.getElementById('todo_cont')
const doneCont = document.getElementById('done_cont')
const todoInput = document.getElementById('main-input')

todoCont.addEventListener('click', Move)

doneCont.addEventListener('click', Move)

todoAdd.addEventListener('click', Render)
todoAdd.addEventListener('click', ReturnFocus)

newListBtn.addEventListener('click', NewList)

todoInput.addEventListener('keypress', RemoveError)

window.onLoad = LocalStorageWork()
