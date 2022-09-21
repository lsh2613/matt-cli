import { cs } from '../index'

function fetchPastStudentClass(userId) {
  return cs.get(`/${userId}/FINISHED`)
}
function fetchDoingStudentClass(userId) {
  return cs.get(`/${userId}/DOING`)
}

export { fetchPastStudentClass, fetchDoingStudentClass }
