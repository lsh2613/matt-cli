import { instructor } from '../index'

function createIns(data) {
  return instructor.post('/new', data)
}

export { createIns }
