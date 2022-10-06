import React, { useEffect, useState } from 'react'
import { fetchReviewByClassId } from '../../../api/review/review,'
import styles from './review.module.css'
import float from '@/common/float.module.css'
import {
  fetchReviewByInsId,
  makeLike,
  cancelLike,
  makeHate,
  cancelHate,
} from '@api/review/review,'
const Review = (props) => {
  const classId = props.classId
  const [reviews, setReviews] = useState([])

  const fetchThumbs = (code, id) => {
    if (code === 1) {
      makeLike(id).catch((e) => {
        cancelLike(id)
        fetchReviewByInsId(insId).then((res) => setReviews(res.data))
      })
    } else {
      makeHate(id).catch((e) => {
        cancelHate(id)
        fetchReviewByInsId(insId).then((res) => setReviews(res.data))
      })
    }
    fetchReviewByClassId(classId).then((res) => setReviews(res.data))
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
                <span>{'⭐'.repeat(review.score)}</span>
              </dd>
              <dd className={`${styles.date} ${float.floatRight}`}>
                {review.date}
              </dd>
            </div>
            <hr />
            <dd className={styles.content}>{review.reviewContent}</dd>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Review
