import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './recommClass.module.css'
import { fetchBeforClass } from '@api/class/class'

const RecommClass = (props) => {
  const navigate = useNavigate()
  const [classes, setClasses] = useState([])

  useEffect(() => {
    fetchBeforClass().then((res) => {
      setClasses(res.data)
    })
  }, [])

  const toClassInfo = (classId) => {
    navigate(`/class/${classId}`, { state: { classId: classId } })
  }

  return (
    <div className={styles.container}>
      <div className={styles.back}></div>
      <div className={styles.title}>🔥다가오는 신생 클래스</div>

      <div className={styles.cardContainer}>
        {classes.map((classes) => (
          <>
            <div
              className={`${styles.card} ${styles.galleryCell}`}
              onClick={() => toClassInfo(classes.classId)}
              key={classes.classId}
            >
              <div className={`${styles.classSt} ${styles.will}`}>진행예정</div>
              <div className={styles.classTitle}>{classes.title}</div>
              <div className={styles.contents}>
                <div className={styles.etc}>
                  {classes.instructorName} 멘토 ( {classes.instructorMajor} )
                </div>
                <div className={styles.etc}>
                  {classes.startDate} ~ {classes.endDate}
                </div>
                <div className={styles.etc}>
                  현재 지원 인원
                  <span className={styles.bold}>
                    {classes.totalCount} / {classes.numberOfStudents}명
                  </span>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  )
}

export default RecommClass
