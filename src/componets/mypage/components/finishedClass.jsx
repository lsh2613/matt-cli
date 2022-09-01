import React, { useState } from 'react'
import styles from './createclass.module.css'
import button from '../../../common/button.module.css'
import float from '../../../common/float.module.css'
import { useNavigate } from 'react-router-dom'
import { fetchClassByInsId } from '../../../api/class/class'
import { useEffect } from 'react'

const FinishedClass = (props) => {
  const navigate = useNavigate()
  const [classes, setClasses] = useState([])
  const toClassInfo = (classId) => {
    navigate(`/classInfo/${classId}`, { state: { classId: classId } })
  }

  return (
    <>
      <span className={styles.title}>수강완료한 강의</span>
      <div className={styles.classList}>
        {classes.map((classes) => (
          <div className={styles.class} key={classes.classId}>
            <article className={styles.classNm}>{classes.title}</article>
            <aside className={styles.days}>화, 목</aside>
            <aside className={styles.time}>
              {classes.startTime} ~ {classes.endTime}
            </aside>
            <aside className={styles.cnt}>{classes.numberOfStudents}명</aside>
            <button
              className={`${button.borderGrayBtn} ${styles.showDetails}`}
              onClick={() => toClassInfo(classes.classId)}
            >
              상세보기
            </button>
          </div>
        ))}
      </div>
    </>
  )
}

export default FinishedClass
