import React, { useState } from 'react'
import styles from './createclass.module.css'
import button from '@/common/button.module.css'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

import { fetchPastStudentClass } from '../../../api/cs/cs'
import WriteReview from '../modal/writeReview'

const FinishedClass = (props) => {
  const navigate = useNavigate()
  const [modal, setModal] = useState(false)
  const [classes, setClasses] = useState([])
  const toClassInfo = (classId) => {
    navigate(`/class/${classId}`, {
      state: { classId: classId, classSt: true },
    })
  }

  const [classId, setClassId] = useState(0)

  const userId = localStorage.getItem('studentId')
  useEffect(() => {
    fetchPastStudentClass(userId).then((res) => setClasses(res.data))
  }, [])

  const updateVisible = () => {
    setModal(false)
    fetchPastStudentClass(userId).then((res) => setClasses(res.data))
  }

  return (
    <>
      <>
        <span className={styles.title}>수강완료한 강의</span>
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
              {classes.review === 'NOT' ? (
                <button
                  className={`${button.borderGrayBtn} ${styles.showDetails}`}
                  onClick={(e) => {
                    e.stopPropagation()
                    setClassId(classes.classId)
                    setModal(true)
                  }}
                >
                  리뷰작성
                </button>
              ) : (
                <button
                  className={`${button.fullGrayBtn} ${styles.showDetails}`}
                  disabled
                >
                  작성완료
                </button>
              )}
            </div>
          ))}
        </div>
      </>
      <WriteReview
        visible={modal}
        classId={classId}
        updateVisible={updateVisible}
      />
    </>
  )
}

export default FinishedClass
