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

function makeClassFinished(classId) {
  return cs.post(`/status/${classId}`, classId)
}
export {
  fetchPastStudentClass,
  fetchDoingStudentClass,
  fetchStudentByClassId,
  makeClassFinished,
}
