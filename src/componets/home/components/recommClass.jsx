import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './recommClass.module.css'
import { fetchBeforClass } from '@api/class/class'

const RecommClass = (props) => {
  const navigate = useNavigate()
  const [classes, setClasses] = useState([])
  const left = '<'
  const right = '>'
  const [tran, setTran] = useState(0)

  useEffect(() => {
    fetchBeforClass().then((res) => {
      setClasses(res.data)
    })
  }, [])

  const toClassInfo = (classId) => {
    navigate(`/class/${classId}`, { state: { classId: classId } })
  }

  const galleryCell = {
    transform: `translate(calc(${tran}% + 20px))`,
    transition: `.3s`,
    duration: 300,
  }

  const animateClass = (dir) => {
    if (dir === 'left') {
      tran > -30 ? ' ' : setTran(tran + 100)
    } else {
      ;-100 * classes.length > tran - 300 ? '' : setTran(tran - 100)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.back}></div>
      <div className={styles.title}>🔥다가오는 신생 클래스</div>

      <div className={styles.cardContainer}>
        {classes.map((classes) => (
          <div
            className={`${styles.card} `}
            style={galleryCell}
            onClick={() => toClassInfo(classes.classId)}
            key={classes.classId}
          >
            <div className={`${styles.classSt} ${styles.will}`}>N E W</div>
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
        ))}
        <div className={styles.btnGroup}>
          <div
            className={`${styles.btn} ${styles.left}`}
            onClick={() => {
              animateClass('left')
            }}
          >
            {left}
          </div>
          <div
            className={`${styles.btn} ${styles.right}`}
            onClick={() => {
              animateClass('right')
            }}
          >
            {right}
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecommClass
