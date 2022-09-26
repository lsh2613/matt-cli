import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import styles from './waiting.module.css'
import button from '@/common/button.module.css'
import float from '@/common/button.module.css'
import { deleteStudent, fetchStudent, transferToCs } from '@api/wating/wating'

const Waiting = (props) => {
  const location = useLocation()
  const classId = location.state.classId
  const [ws, setWs] = useState([])
  useEffect(() => {
    fetchStudent(classId).then((res) => {
      setWs(res.data)
    })
  }, [])

  const fetchWs = (id) => {
    transferToCs(id).then((res) => {
      if (res.status === 200) {
        fetchStudent(classId).then((res) => {
          setWs(res.data)
        })
      }
    })
  }
  return (
    <>
      <div className={styles.container}>
        <section>
          <h3>수강 대기중인 학생 </h3>
          <div className={`${styles.waiting} ${styles.box}`}>
            <div className={styles.list}>
              <div className={styles.label}>
                <dd>이름</dd>
                <dd>신청일</dd>
                <dd>확인</dd>
              </div>

              {ws.length > 0 ? (
                <div className={styles.students}>
                  {' '}
                  {ws.map((student) => (
                    <div className={styles.student} key={student.id}>
                      <article className={styles.info}>
                        <dd>{student.name}</dd>
                        <dd className={styles.date}>{student.date}</dd>
                        <dd
                          className={styles.btn}
                          onClick={fetchWs(student.id)}
                        >
                          ➕
                        </dd>
                      </article>
                      <hr className={styles.hr} />
                      <article className={styles.reason}>
                        {student.content}
                      </article>
                    </div>
                  ))}
                </div>
              ) : (
                <div className={styles.none}>신청자가 없습니다 ㅜ ㅜ </div>
              )}
            </div>
          </div>
        </section>

        <section>
          <h3>수강 확정된 학생 </h3>
          <div className={`${styles.confirm} ${styles.box}`}>
            <div className={styles.list}>
              <div className={styles.label}>
                <dd>이름</dd>
                <dd>수락일</dd>
                <dd>취소</dd>
              </div>
              <div className={styles.students}>
                <div className={styles.student}>
                  <article className={styles.info}>
                    <dd>가궁</dd>
                    <dd className={styles.date}>2022-09-14</dd>
                    <dd className={styles.btn}>➖</dd>
                  </article>
                  <hr className={styles.hr} />
                  <article className={styles.reason}>
                    진짜 열심히 하려고 하긴 했는데 열심히 안해가지고 근데도
                    열심히 한다고 하면 그래서 결론은 열심히 해봅시다
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
        <button className={`${button.fullGrayBtn} ${styles.end}`}>
          수강생 마감
        </button>
      </div>
    </>
  )
}

export default Waiting
