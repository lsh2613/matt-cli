import React, { useState } from 'react'
import styles from './createclass.module.css'
import button from '../../../common/button.module.css'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

import { fetchDoingStudentClass } from '../../../api/cs/cs'

const DoingClass = (props) => {
  const navigate = useNavigate()
  const [classes, setClasses] = useState([])
  const toClassInfo = (classId) => {
    navigate(`/class/${classId}`, { state: { classId: classId } })
  }

  const userId = localStorage.getItem('studentId')
  useEffect(() => {
    fetchDoingStudentClass(userId).then((res) => setClasses(res.data))
  }, [])

  return (
    <>
      <span className={styles.title}>수강중인 강의</span>
      <div className={styles.classList}>
        {classes.map((classes) => (
          <div
            className={styles.class}
            key={classes.classId}
            onClick={() => toClassInfo(classes.classId)}
          >
            <article className={styles.classNm}>{classes.title}</article>
            <aside className={styles.days}>화, 목</aside>
            <aside className={styles.time}>
              {classes.startTime} ~ {classes.endTime}
            </aside>
            <aside className={styles.cnt}>{classes.numberOfStudents}명</aside>
            <button className={`${button.borderGrayBtn} ${styles.showDetails}`}>
              상세보기
            </button>
          </div>
        ))}
      </div>
    </>
  )
}

export default DoingClass
