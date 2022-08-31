import React from 'react'
import styles from './waiting.module.css'

const Waiting = (props) => {
  return (
    <>
      <div className={styles.container}>
        <section className={`${styles.waiting} ${styles.box}`}>
          <h3>수강 대기중인 학생 </h3>
          <div className={styles.list}>
            <div className={styles.label}>
              <dd>닉네임</dd>
              <dd>성별</dd>
              <dd>생년</dd>
              <dd>확인</dd>
            </div>
            <div className={styles.studnets}>
              <div className={styles.student}>
                <dd>가궁</dd>
                <dd>여</dd>
                <dd>1997년생</dd>
                <dd className={styles.btn}>➕</dd>
              </div>
              <div className={styles.student}>
                <dd>가궁</dd>
                <dd>여</dd>
                <dd>1997년생</dd>
                <dd className={styles.btn}>➕</dd>
              </div>
              <div className={styles.student}>
                <dd>가궁</dd>
                <dd>여</dd>
                <dd>1997년생</dd>
                <dd className={styles.btn}>➕</dd>
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.confirm} ${styles.box}`}>
          <h3>수강 확정된 학생 </h3>
          <div className={styles.list}>
            <div className={styles.label}>
              <dd>닉네임</dd>
              <dd>성별</dd>
              <dd>생년</dd>
              <dd>취소</dd>
            </div>
            <div className={styles.studnets}>
              <div className={styles.student}>
                <dd>가궁</dd>
                <dd>여</dd>
                <dd>1997년생</dd>
                <dd className={styles.btn}>➖</dd>
              </div>
              <div className={styles.student}>
                <dd>가궁</dd>
                <dd>여</dd>
                <dd>1997년생</dd>
                <dd className={styles.btn}>➖</dd>
              </div>
              <div className={styles.student}>
                <dd>가궁</dd>
                <dd>여</dd>
                <dd>1997년생</dd>
                <dd className={styles.btn}>➖</dd>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Waiting
