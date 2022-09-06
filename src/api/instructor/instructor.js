import { instructor } from '../index'

function createIns(data) {
  return instructor.post('/new', data)
}

function fetchInstructors() {
  return instructor.get('')
}

export { createIns, fetchInstructors }
