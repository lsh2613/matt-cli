import { wish } from '../'

function fetchWish() {
  return wish.get('')
}
function postWish(classId) {
  return wish.post(`/${classId}`)
}
function deletehWish(wishId) {
  return wish.delete(`/${wishId}`)
}

export { fetchWish, postWish, deletehWish }
