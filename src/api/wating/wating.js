import { waiting } from '../index'

function applyClass(data) {
  console.log(data)
  //return waiting.post(`/${data.classId}`, encodeURI(data.content))
}

function fetchStudent(classId) {
  return waiting.get(`/${classId}`)
}

function deleteStudent(wsId) {
  return waiting.delete(`/${wsId}`)
}

function updateContent(wsId, data) {
  return waiting.patch(`/${wsId}`, data)
}

function trasferToCs(wsId) {
  return waiting.post(`/transfer/${wsId}`)
}
export { applyClass, fetchStudent, deleteStudent, updateContent, trasferToCs }
