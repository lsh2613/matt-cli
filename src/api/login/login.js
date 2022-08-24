import { login } from '../index'

function signup(data) {
  return login.post('/new', data);
}


export { signup }