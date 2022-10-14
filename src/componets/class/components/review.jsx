import React, { useEffect, useState } from 'react'
import { fetchReviewByClassId } from '../../../api/review/review,'
import { useSelector, useDispatch } from 'react-redux'
import styles from './review.module.css'
import float from '@/common/float.module.css'
import {
  fetchReviewByInsId,
  makeLike,
  cancelLike,
  makeHate,
  cancelHate,
  deleteReview,
  updateReview,
} from '@api/review/review,'
import { review } from '../../../api'

const Review = (props) => {
  const classId = props.classId
  const [reviews, setReviews] = useState([])
  const userId = useSelector((state) => state.user.user.studentId)

  const [edit, setEdit] = useState({
    reviewContent: '',
    score: 0,
    reviewId: 0,
  })

  const fetchThumbs = (code, id) => {
    if (code === 1) {
      makeLike(id)
        .then(() => {
          fetchReviews()
        })
        .catch((e) => {
          errThumbs(code, id)
        })
    } else {
      makeHate(id)
        .then(() => {
          fetchReviews()
        })
        .catch((e) => {
          errThumbs(code, id)
        })
    }
  }

  const checkUpdate = (review) => {
    setEdit({
      ...edit,
      ['reviewContent']: review.reviewContent,
      ['score']: review.score,
      ['reviewId']: review.instructorReviewId,
    })
  }

  const checkDel = (reviewId) => {
    if (confirm('리뷰를 삭제하시겠습니까?') === true) {
      deleteReview(reviewId).then(() => {
        let filtering = reviews.filter((r) => r.instructorReviewId !== reviewId)
        setReviews(filtering)
      })
    }
  }
  const fetchReviews = () => {
    fetchReviewByClassId(classId).then((res) => setReviews(res.data))
  }

  const errThumbs = (code, id) => {
    if (code === 1)
      cancelLike(id).then(() => {
        fetchReviews()
      })
    else
      cancelHate(id).then(() => {
        fetchReviews()
      })
  }

  //별수정

  const onChange = (e) => {
    const { name, value } = e.target
    setEdit({
      ...edit,
      [name]: value,
    })
  }

  const onChangeEdit = (e) => {
    setEdit({ ...edit, ['reviewContent']: e.target.value })
  }

  const editHandleKeyPress = (e) => {
    if (e.key === 'Enter') {
      updateReview(edit).then(() => {
        let filter = []
        reviews.filter((r) => {
          console.log(r.instructorReviewId, edit.instructorReviewId)
          if (r.instructorReviewId !== edit.reviewId) filter.push(r)
          else {
            r.score = edit.score
            r.reviewContent = edit.reviewContent
            filter.push(r)
          }
        })

        setReviews(filter)

        setEdit({
          ...edit,
          ['reviewId']: 0,
          ['reviewContent']: '',
          ['score']: 0,
        })
      })
    }
  }

  useEffect(() => {
    fetchReviewByClassId(classId).then((res) => setReviews(res.data))
  }, [])
  return (
    <section className={styles.container}>
      {reviews.map((review) => (
        <div className={styles.review} key={review.instructorReviewId}>
          <div className={styles.row}>
            <dd className={styles.title}>{review.title}</dd>
            <div className={styles.thumbs}>
              {parseInt(userId) === review.userId ? (
                <div className={styles.right}>
                  <span
                    className={styles.span}
                    onClick={() => {
                      checkDel(review.instructorReviewId)
                    }}
                  >
                    삭제
                  </span>
                  |
                  <span
                    className={styles.span}
                    onClick={() => {
                      checkUpdate(review)
                    }}
                  >
                    수정
                  </span>
                </div>
              ) : (
                ''
              )}
              <dd
                className={styles.like}
                onClick={() => fetchThumbs(1, review.instructorReviewId)}
              >
                👍{review.likes}
              </dd>
              <dd
                className={styles.hate}
                onClick={() => fetchThumbs(-1, review.instructorReviewId)}
              >
                👎{review.hates}
              </dd>
            </div>
          </div>
          <div className={styles.contents}>
            <div className={styles.row}>
              <dd className={styles.nickname}>{review.nickname}</dd>
              <dd className={styles.score}>
                {edit.reviewId === review.instructorReviewId ? (
                  <div className={styles.starForm}>
                    <fieldset className={styles.fieldset}>
                      <input
                        className={styles.radioForm}
                        type='radio'
                        onChange={onChange}
                        name='score'
                        id='rate5'
                        value='5'
                      />
                      <label htmlFor='rate5' className={styles.radioForm}>
                        ⭐
                      </label>
                      <input
                        className={styles.radioForm}
                        type='radio'
                        onChange={onChange}
                        name='score'
                        value='4'
                        id='rate4'
                      />
                      <label htmlFor='rate4' className={styles.radioForm}>
                        ⭐
                      </label>
                      <input
                        className={styles.radioForm}
                        type='radio'
                        onChange={onChange}
                        name='score'
                        value='3'
                        id='rate3'
                      />
                      <label htmlFor='rate3' className={styles.radioForm}>
                        ⭐
                      </label>
                      <input
                        className={styles.radioForm}
                        type='radio'
                        onChange={onChange}
                        name='score'
                        value='2'
                        id='rate2'
                      />
                      <label htmlFor='rate2' className={styles.radioForm}>
                        ⭐
                      </label>
                      <input
                        className={styles.radioForm}
                        type='radio'
                        onChange={onChange}
                        name='score'
                        value='1'
                        id='rate1'
                      />
                      <label htmlFor='rate1' className={styles.radioForm}>
                        ⭐
                      </label>
                    </fieldset>
                  </div>
                ) : (
                  <span>{'⭐'.repeat(review.score)}</span>
                )}
              </dd>
              <dd className={`${styles.date} ${float.floatRight}`}>
                {review.date.slice(0, 11)}
              </dd>
            </div>
            <hr />
            <dd className={styles.content}>
              {edit.reviewId === review.instructorReviewId ? (
                <input
                  type='text'
                  name='content'
                  value={edit.reviewContent || ''}
                  onChange={onChangeEdit}
                  onKeyPress={editHandleKeyPress}
                  className={styles.inputForm}
                />
              ) : (
                review.reviewContent
              )}
            </dd>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Review
