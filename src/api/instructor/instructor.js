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

function updateInstructorInfo(form) {
  const data = {
    instructorId: form.instructorId,
    introduction: form.introduction,
    major: form.major,
  }
  return instructor.patch(`/${data.instructorId}/edit`, data)
}

export {
  createIns,
  fetchInstructors,
  fetchInstructorByInsId,
  updateInstructorInfo,
}
