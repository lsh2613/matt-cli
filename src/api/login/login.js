import { login } from '../index'

function signup(data) {
  console.log(data)
  return login.post('/new', data);
}


export { signup }