import React, { useState, useEffect } from "react";

import {
  fetchReviewByInsId,
  makeLike,
  cancleLike,
  makeHate,
  cancelHate,
} from "@api/review/review,";
import styles from "../../class/components/review.module.css";
import float from "@/common/float.module.css";
const InsReview = (props) => {
  const [reviews, setReviews] = useState([]);
  const insId = props.insId;

  const fetchThumbs = (code) => {
    if (code === 1) {
      makeLike;
    } else {
    }
  };
  useEffect(() => {
    fetchReviewByInsId(insId).then((res) => setReviews(res.data));
  }, []);
  return (
    <section className={styles.container}>
      <h3>💬 수강생이 작성한 최근 리뷰</h3>
      <div className={styles.reviewContainer}>
        {reviews.map((review, index) => (
          <div className={styles.review} key={index}>
            <div className={styles.row}>
              <dd className={styles.title}>{review.title}</dd>
              <div className={styles.thumbs}>
                <dd className={styles.like} onClick={() => fetchThumbs(1)}>
                  👍{review.likes}
                </dd>
                <dd className={styles.hate} onClick={() => fetchThumbs(-1)}>
                  👎{review.hates}
                </dd>
              </div>
            </div>
            <div className={styles.contents}>
              <div className={styles.row}>
                <dd className={styles.nickname}>{review.nickname}</dd>
                <dd className={styles.score}>
                  <span>{"⭐".repeat(review.score)}</span>
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
      </div>
    </section>
  );
};
export default InsReview;
