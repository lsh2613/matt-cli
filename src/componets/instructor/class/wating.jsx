import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import styles from './waiting.module.css'
import button from '@/common/button.module.css'
import float from '@/common/button.module.css'
import { fetchStudent, transferToCs } from '@api/wating/wating'
import { fetchStudentByClassId } from '@api/cs/cs'

const Waiting = (props) => {
  const location = useLocation()
  const classId = location.state.classId

  const [ws, setWs] = useState([])
  const [cs, setCs] = useState([])
  useEffect(() => {
    fetchData()
  }, [])

  const fetchWs = (id) => {
    transferToCs(id).then((res) => {
      if (res.status === 200) {
        fetchData()
      }
    })
  }

  const fetchData = () => {
    fetchStudent(classId).then((res) => {
      setWs(res.data)
    })
    fetchStudentByClassId(classId).then((res) => setCs(res.data))
  }
  return (
    <>
      <div className={styles.container}>
        <section className={styles.section}>
          <h3 className={styles.h3}>수강 대기생 </h3>
          <div className={`${styles.waiting} ${styles.box}`}>
            <div className={styles.list}>
              <div className={styles.label}>
                <dd className={styles.dd}>이름</dd>
                <dd className={styles.dd}>신청일</dd>
                <dd className={styles.dd}></dd>
              </div>

              {ws.length > 0 ? (
                <div className={styles.students}>
                  {' '}
                  {ws.map((student) => (
                    <div
                      className={styles.student}
                      key={student.waitingStudentId}
                    >
                      <article className={styles.info}>
                        <dd className={styles.dd}>{student.name}</dd>
                        <dd className={styles.dd}>{student.date}</dd>
                        <dd
                          className={`${styles.dd} ${styles.btn} ${button.red}`}
                          onClick={() => fetchWs(student.waitingStudentId)}
                        >
                          추가
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
          <h3 className={styles.h3}>수강 확정생 </h3>
          <div className={`${styles.confirm} ${styles.box}`}>
            <div className={styles.list}>
              <div className={styles.label}>
                <dd className={styles.dd}>이름</dd>
                <dd className={styles.dd}>수락일</dd>
                <dd className={styles.dd}></dd>
              </div>
              {cs.length > 0 ? (
                <div className={styles.students}>
                  {' '}
                  {cs.map((student, index) => (
                    <div className={styles.student} key={index}>
                      <article className={styles.info}>
                        <dd className={styles.dd}>{student.name}</dd>
                        <dd className={`${styles.dd} ${styles.date}`}>
                          {student.date}
                        </dd>
                        <dd
                          className={`${styles.dd} ${styles.btn} ${button.blue}`}
                          onClick={() => fetchWs(student.waitingStudentId)}
                        >
                          제외
                        </dd>
                      </article>
                      <hr className={styles.hr} />
                      <article className={styles.reason}>
                        {student.contents ? `${student.contents}` : 'no data '}
                      </article>
                    </div>
                  ))}
                </div>
              ) : (
                <div className={styles.none}></div>
              )}
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
