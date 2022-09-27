import { cs } from '../index'

function fetchPastStudentClass() {
  return cs.get(`/userid/FINISHED`)
}
function fetchDoingStudentClass() {
  return cs.get(`/userid/DOING`)
}

function fetchStudentByClassId(id) {
  return cs.get(`/${id}`)
}
export { fetchPastStudentClass, fetchDoingStudentClass, fetchStudentByClassId }
