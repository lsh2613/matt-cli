import { instructor } from '../index'

function createIns(data) {
  return instructor.post('/new', data)
}

function fetchInstructors() {
  return instructor.get('')
}

function fetchInstructorByInsId(insId) {
  return instructor.get(`/${insId}`)
}

export { createIns, fetchInstructors, fetchInstructorByInsId }
