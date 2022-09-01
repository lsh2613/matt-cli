import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './recommClass.module.css'
import { fetchBeforClass } from '../../../api/class/class'
const RecommClass = (props) => {
  const navigate = useNavigate()
  const [classes, setClasses] = useState([])
  useEffect(() => {
    fetchBeforClass().then((res) => {
      setClasses(res.data)
    })
  }, [])

  const toClassInfo = (classId) => {
    navigate(`/classInfo/${classId}`, { state: { classId: classId } })
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>🔥다가오는 신생 클래스</div>

      <div className={styles.cardContainer}>
        {classes.map((classes) => (
          <div
            className={styles.card}
            onClick={() => toClassInfo(classes.classId)}
          >
            <div className={styles.classSt}>진행중</div>
            <div className={styles.classTitle}>{classes.title}</div>
            <div className={styles.contents}>
              <div className={styles.etc}>김가정 멘토</div>
              <div className={styles.etc}>
                {classes.startDate} ~ {classes.endDate}
              </div>
              <div className={styles.etc}>
                현재 지원 인원{' '}
                <span className={styles.bold}>
                  {classes.waitingStudents.length} / {classes.numberOfStudents}
                  명
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecommClass
