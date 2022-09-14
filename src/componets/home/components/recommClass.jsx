import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './recommClass.module.css'
import { fetchBeforClass } from '@api/class/class'
import { nowDate } from '@utils/index'
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

  const classSt = (startDate, endDate) => {
    if (startDate > nowDate)
      return <div className={`${styles.classSt} ${styles.will}`}>진행예정</div>
    if (endDate > nowDate)
      return <div className={`${styles.classSt} ${styles.ing}`}>진행중</div>
    return <div className={`${styles.classSt} ${styles.done}`}>종료</div>
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>🔥다가오는 신생 클래스</div>

      <div className={styles.cardContainer}>
        {classes.map((classes) => (
          <div
            className={styles.card}
            onClick={() => toClassInfo(classes.classId)}
            key={classes.classId}
          >
            {classSt(classes.startDate, classes.endDate)}
            <div className={styles.classTitle}>{classes.title}</div>
            <div className={styles.contents}>
              <div className={styles.etc}>김가정 멘토</div>
              <div className={styles.etc}>
                {classes.startDate} ~ {classes.endDate}
              </div>
              <div className={styles.etc}>
                현재 지원 인원
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
