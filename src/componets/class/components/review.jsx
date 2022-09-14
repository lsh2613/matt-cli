import React, { useEffect, useState } from 'react'
import { fetchReviewByClassId } from '../../../api/review/review,'
import styles from './review.module.css'
const Review = (props) => {
  const classId = props.classId
  const [reviews, setReviews] = useState([])
  useEffect(() => {
    fetchReviewByClassId(classId).then((res) => setReviews(res.data))
  }, [])
  return (
    <section className={styles.container}>
      {reviews.map((review, index) => (
        <li className={styles.review} key={index}>
          <div className={styles.contents}>
            <div className={styles.row}>
              <dd className={styles.score}>⭐{review.score} 점</dd>
              <dd className={styles.nickname}>{review.nickname}</dd>
            </div>
            <dd className={styles.content}>{review.reviewContent}</dd>
          </div>
        </li>
      ))}
    </section>
  )
}

export default Review
