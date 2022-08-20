import React from 'react';
import styles from './recommClass.module.css'
const RecommClass = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>🔥이번주 떠오르는 인기 클래스</div>

      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <div className={styles.classSt}>진행중</div>
          <div className={styles.classTitle}>
            리액트릭매직쇼 우짤래미 저짤래미
          </div>
          <div className={styles.contents}>
            <div className={styles.etc}>김가정 멘토</div>
            <div className={styles.etc}>2022.08.12 ~ 2022.09.01</div>
            <div className={styles.etc}>현재 지원 인원 <span className={styles.bold}> 7 / 8명</span></div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default RecommClass;