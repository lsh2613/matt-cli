import { user } from '../index'

function signup(data) {
  return user.post('/new', data)
}

function editNickNm(nick) {
  return user.patch(`/editNickname?nickname=${nick}`)
}

export { signup, editNickNm }
