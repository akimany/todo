// it might be said:
const RemoveError = event => {
  if (event.currentTarget.classList.contains('is-invalid')) {
    event.currentTarget.classList.remove('is-invalid')
  }
}
export default RemoveError
