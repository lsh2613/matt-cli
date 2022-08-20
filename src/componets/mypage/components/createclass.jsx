import React from 'react';
import styles from './createclass.module.css'
import button from '../../../common/button.module.css'
import float from '../../../common/float.module.css'
const CreateClass = (props) => {
  return (
    <>
      <span className={styles.title}>내가 개설한 클래스</span>
      <button className={`${button.fullBtn} ${float.floatRight}`}>창설하기</button>
      <div className={styles.classList}>
        <div className={styles.class}>
          <article className={styles.classNm}>JAVA 튼튼</article>
          <aside className={styles.days}>화, 목</aside>
          <aside className={styles.time}>17:00 ~ 19:00</aside>
          <aside className={styles.cnt}>7명</aside>
          <button className={`${button.borderGrayBtn} ${styles.showDetails}`}> 상세보기</button>
        </div>
      </div>
    </>
  )
}

export default CreateClass;