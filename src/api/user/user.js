import { user } from '../index'

function signup(data) {
  return user.post('/new', data)
}

function editNickNm(nick) {
  return user.patch(`/editNickname?nickname=${nick}`)
}

function editPw(pw) {
  return user.patch(`/editPwd?pwd=${pw}`)
}

function deleteUser() {
  return user.delete('/delete')
}
export { signup, editNickNm, editPw, deleteUser }
