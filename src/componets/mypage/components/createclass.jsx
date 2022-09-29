import React, { useState } from 'react'
import styles from './createclass.module.css'
import button from '../../../common/button.module.css'
import float from '../../../common/float.module.css'
import { useNavigate } from 'react-router-dom'
import { fetchClassByInsId } from '../../../api/class/class'
import { useEffect } from 'react'

import { nowDate } from '@utils/index'

const CreatedClass = (props) => {
  const navigate = useNavigate()
  const [classes, setClasses] = useState([])
  const toClassInfo = (classId) => {
    navigate(`/class/${classId}`, { state: { classId: classId } })
  }

  const toWaiting = (classId) => {
    navigate(`/class/${classId}/waiting`, { state: { classId: classId } })
  }
  useEffect(() => {
    fetchClassByInsId(localStorage.getItem('instructorId')).then((res) =>
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
            {classes.endDate > nowDate ? (
              <button
                className={`${button.borderGrayBtn} ${styles.showDetails}`}
                onClick={(e) => {
                  e.stopPropagation()
                  toWaiting(classes.classId)
                }}
              >
                신청자 관리
              </button>
            ) : (
              <button
                disabled
                className={`${button.end} ${styles.showDetails}`}
              >
                종료
              </button>
            )}
          </div>
        ))}
      </div>
    </>
  )
}

export default CreatedClass
