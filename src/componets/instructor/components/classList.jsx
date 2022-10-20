import React, { useEffect, useState } from 'react'
import styles from './classList.module.css'
import { fetchClassByInsId } from '../../../api/class/class'

import { useLocation, useNavigate } from 'react-router-dom'
const ClassList = (props) => {
  const navigate = useNavigate()
  const [classes, setClasses] = useState([])
  useEffect(() => {
    const insId = props?.insId
    fetchClassByInsId(insId).then((res) => {
      setClasses(res.data)
    })
  }, [])

  const classSt = (classSt) => {
    if (classSt === 1)
      return <div className={`${styles.classSt} ${styles.will}`}>진행예정</div>
    else if (classSt === 3)
      return <div className={`${styles.classSt} ${styles.will}`}>모집완료</div>
    else if (classSt === 5)
      return <div className={`${styles.classSt} ${styles.ing}`}>진행중</div>
    else if (classSt === 9)
      return <div className={`${styles.classSt} ${styles.done}`}>종료</div>
  }

  const toClassInfo = (classId) => {
    navigate(`/class/${classId}`, { state: { classId: classId } })
  }
  return (
    <section className={styles.classList}>
      <h3>📋 멘토가 개설한 강의 목록</h3>
      <div className={styles.classContainer}>
        {classes.map((classes) => (
          <div
            className={styles.class}
            key={classes.classId}
            onClick={() => {
              toClassInfo(classes.classId)
            }}
          >
            <article className={styles.classNm}>{classes.title}</article>
            <aside className={styles.days}>{classSt(classes.classSt)}</aside>
            <aside className={styles.time}>
              {classes.startTime} ~ {classes.endTime}
            </aside>
            <aside className={styles.cnt}>{classes.numberOfStudents}명</aside>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ClassList
