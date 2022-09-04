import React from 'react'
import styles from './waiting.module.css'

const Waiting = (props) => {
  return (
    <>
      <div className={styles.container}>
        <section>
          <h3>수강 대기중인 학생 </h3>
          <div className={`${styles.waiting} ${styles.box}`}>
            <div className={styles.list}>
              <div className={styles.label}>
                <dd>닉네임</dd>
                <dd>성별</dd>
                <dd>생년</dd>
                <dd>확인</dd>
              </div>
              <div className={styles.students}>
                <div className={styles.student}>
                  <article className={styles.info}>
                    <dd>가궁</dd>
                    <dd>여</dd>
                    <dd>1997년생</dd>
                    <dd className={styles.btn}>➕</dd>
                  </article>
                  <hr />
                  <article className={styles.reason}>
                    사유 )
                    <span className={styles.comment}>진짜 열심히 하려고 하긴 했는데 열심히 안해가지고 근데도 열심히 한다고 하면 그래서 결론은 열심히 해봅시다</span>
                  </article>
                </div>

              </div>
            </div>
          </div>
        </section>

        <section >
          <h3>수강 확정된 학생 </h3>
          <div className={`${styles.confirm} ${styles.box}`}>
            <div className={styles.list}>
              <div className={styles.label}>
                <dd>닉네임</dd>
                <dd>성별</dd>
                <dd>생년</dd>
                <dd>취소</dd>
              </div>
              <div className={styles.students}>
                <div className={styles.student}>
                  <article className={styles.info}>
                    <dd>가궁</dd>
                    <dd>여</dd>
                    <dd>1997년생</dd>
                    <dd className={styles.btn}>➖</dd>
                  </article>
                  <hr />
                  <article className={styles.reason}>
                    사유 )
                    <span className={styles.comment}>진짜 열심히 하려고 하긴 했는데 열심히 안해가지고 근데도 열심히 한다고 하면 그래서 결론은 열심히 해봅시다</span>
                  </article>
                </div>


              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Waiting
