import { login, logout } from '../index'

function signup(data) {
  return login.post('/new', data)
}

function signin(data) {
  return login.post('', data)
}

function log_out() {
  return logout.post('', null)
}

export { signup, signin, log_out }
