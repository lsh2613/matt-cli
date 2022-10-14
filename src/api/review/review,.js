import { insReview, review } from '..'

function fetchReviewByClassId(classId) {
  return insReview.get(`/classId/${classId}`)
}

function postReveiw(form) {
  return insReview.post('', form)
}

function deleteReview(id) {
  return insReview.delete(`/${id}`, '')
}

function updateReview(form) {
  return insReview.patch(`/${form.reviewId}`, form)
}

function fetchReviewByInsId(insId) {
  return insReview.get(`/instructor/${insId}`)
}

function makeLike(reviewId) {
  return insReview.post(`/Like/${reviewId}`, '')
}
function cancelLike(reviewId) {
  return insReview.delete(`/Like/${reviewId}`, '')
}
function makeHate(reviewId) {
  return insReview.post(`/Hate/${reviewId}`, '')
}
function cancelHate(reviewId) {
  return insReview.delete(`/Hate/${reviewId}`, '')
}

export {
  fetchReviewByClassId,
  postReveiw,
  deleteReview,
  updateReview,
  fetchReviewByInsId,
  makeLike,
  cancelLike,
  makeHate,
  cancelHate,
}
