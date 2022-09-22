import { insReview } from '..'

function fetchReviewByClassId(classId) {
  return insReview.get(`/classId/${classId}`)
}

function postReveiw(form) {
  return insReview.post('', form)
}

function deleteReview(form) {
  return insReview.delete('', form)
}

function patchReveiw(form) {
  return insReview.patch('', form)
}

function fetchReviewByInsId(insId) {
  return insReview.get(`/instructor/${insId}`)
}

export {
  fetchReviewByClassId,
  postReveiw,
  deleteReview,
  patchReveiw,
  fetchReviewByInsId,
}
