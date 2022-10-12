import { waiting } from '../index'

function applyClass(data) {
  return waiting.post(`/${data.classId}/?content=${encodeURI(data.content)}`)
}

function fetchStudent(classId) {
  return waiting.get(`/class/${classId}`)
}

function fetchWsByWsId(wsId) {
  return waiting.get(`/${wsId}`)
}
function deleteStudent(wsId) {
  return waiting.delete(`/${wsId}`)
}

function updateContent(data) {
  return waiting.patch(``, data)
}

function transferToCs(wsId) {
  return waiting.post(`/transfer/${wsId}`)
}

function fetchClass() {
  return waiting.get('/class')
}
export {
  applyClass,
  fetchStudent,
  deleteStudent,
  updateContent,
  transferToCs,
  fetchClass,
  fetchWsByWsId,
}
