import {user} from '../index'

function signup(data){
  return user.post('/new',data);
}

export {signup}