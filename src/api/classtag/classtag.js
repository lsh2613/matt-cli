import { classTag } from '..'

function fetchClassTagByClassId(id) {
  return classTag.get(`/classId/${id}`)
}

function deleteClassTag(id) {
  return classTag.delete(`/delete?classTgId=${id}`)
}

function createClassTag(form) {
  return classTag.post(`/new`, form)
}

function fetchClassByTags(tags) {
  let tag_list = []
  tags.forEach((tag) => tag_list.push(tag.tagInfoId))
  const url = `/tagInfoIdList?tagInfoId=${tag_list.join('&tagInfoId=')}`
  return classTag.get(url)
}

export {
  fetchClassTagByClassId,
  deleteClassTag,
  createClassTag,
  fetchClassByTags,
}
