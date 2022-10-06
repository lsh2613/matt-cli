import { insReview, review } from '..'

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

function makeLike(reviewId) {
  return review.post(`/Like/${reviewId}`, '')
}
function cancelLike(reviewId) {
  return review.delete(`/Like/${reviewId}`, '')
}
function makeHate(reviewId) {
  return review.post(`/Hate/${reviewId}`, '')
}
function cancelHate(reviewId) {
  return review.delete(`/Hate/${reviewId}`, '')
}

export {
  fetchReviewByClassId,
  postReveiw,
  deleteReview,
  patchReveiw,
  fetchReviewByInsId,
  makeLike,
  cancelLike,
  makeHate,
  cancelHate,
}
