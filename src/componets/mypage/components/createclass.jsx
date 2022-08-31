import React, { useState } from 'react'
import styles from './createclass.module.css'
import button from '../../../common/button.module.css'
import float from '../../../common/float.module.css'
import { useNavigate } from 'react-router-dom'
import { fetchClassByInsId } from '../../../api/class/class'
import { useEffect } from 'react'

const CreatedClass = (props) => {
  const navigate = useNavigate()
  const [classes, setClasses] = useState([])
  const toClassInfo = (classId) => {
    navigate(`/classInfo/${classId}`, { state: { classId: classId } })
  }
  useEffect(() => {
    fetchClassByInsId(localStorage.getItem('instructor')).then((res) =>
      setClasses(res.data)
    )
  }, [])
  return (
    <>
      <span className={styles.title}>내가 개설한 클래스</span>
      <button
        className={`${button.fullBtn} ${float.floatRight}`}
        onClick={() => {
          navigate('/makeclass')
        }}
      >
        창설하기
      </button>
      <div className={styles.classList}>
        {classes.map((classes) => (
          <div className={styles.class}>
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

export default CreatedClass
