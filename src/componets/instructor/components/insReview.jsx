import React, { useState, useEffect } from 'react'
import { fetchReviewByInsId } from '@api/review/review,'
import styles from '../../class/components/review.module.css'
const InsReview = (props) => {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    const insId = props?.insId
    fetchReviewByInsId(insId).then((res) => setReviews(res.data))
  }, [])
  return (
    <section className={styles.container}>
      <h3>💬 수강생이 작성한 최근 리뷰</h3>
      <div className={styles.reviewContainer}>
        {reviews.map((review, index) => (
          <li className={styles.review} key={index}>
            <div className={styles.row}>
              <dd className={styles.score}>⭐{review.score}점 </dd>
              <dd className={styles.nickname}>{review.nickname}</dd>
            </div>
            <dd className={styles.content}>{review.reviewContent}</dd>
          </li>
        ))}
      </div>
    </section>
  )
}
export default InsReview
