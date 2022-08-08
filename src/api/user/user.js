import {user} from '../index'

function signup(data){
  console.log(data)
  return user.post('/new',data);
}

export {signup}