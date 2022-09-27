import { classTag } from '..'

function fetchClassTagByClassId(id) {
  return classTag.get(`/classId/${id}`)
}

function deleteClassTag(id) {
  return classTag.delete(`/delete?classTgId=${id}`)
}

function createClassTag(form) {
  return classTag.post(`/classTag/new`, form)
}

export { fetchClassTagByClassId, deleteClassTag, createClassTag }
