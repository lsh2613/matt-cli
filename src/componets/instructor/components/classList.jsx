import React, { useEffect, useState } from 'react'
import styles from './classList.module.css'
import button from '../../../common/button.module.css'
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

  const onState = () => {
    return <aside className={styles.state}>진행중</aside>
  }

  const toClassInfo = (classId) => {
    navigate(`/classInfo/${classId}`, { state: { classId: classId } })
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
            {onState()}
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
    </section>
  )
}

export default ClassList
