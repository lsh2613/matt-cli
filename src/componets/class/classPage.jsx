import React, { useState, useEffect } from 'react'
import styles from './classPage.module.css'
import {
  fetchBeforClass,
  fetchDoingClass,
  fetchFinishedClass,
} from '../../api/class/class'
const ClassPage = (props) => {
  const [doing, setDoing] = useState([])
  const [before, setBefore] = useState([])
  const [finished, setFinished] = useState([])

  useEffect(() => {
    fetchBeforClass().then((res) => setBefore(res.data))
    fetchDoingClass().then((res) => setDoing(res.data))
    fetchFinishedClass().then((res) => setFinished(res.data))
  }, [])
  return (
    <div className={styles.container}>
      <section className={styles.before}>
        <h3>🟩 수강생 모집중인 강좌목록</h3>
        <div className={styles.classes}>
          {before.map((classes) => (
            <div className={styles.class} key={classes.classId}>
              <dd className={styles.title}>{classes.title}</dd>
              <dd className={styles.number}>
                수강인원 {classes.numberOfStudents}명
              </dd>
              <dd className={styles.date}>
                {classes.startDate} ~ {classes.endDate}
              </dd>
            </div>
          ))}
        </div>
      </section>
      <section className={styles.doing}>
        <h3>🟦 진행중인 강좌목록</h3>
        <div className={styles.classes}>
          {doing.map((classes) => (
            <div className={styles.class} key={classes.classId}>
              <dd className={styles.title}>{classes.title}</dd>
              <dd className={styles.number}>
                수강인원 {classes.numberOfStudents}명
              </dd>
              <dd className={styles.date}>
                {classes.startDate} ~ {classes.endDate}
              </dd>
            </div>
          ))}
        </div>
      </section>
      <section className={styles.finished}>
        <h3>🟥 종료된 강좌목록</h3>
        <div className={styles.classes}>
          {finished.map((classes) => (
            <div className={styles.class} key={classes.classId}>
              <dd className={styles.title}>{classes.title}</dd>
              <dd className={styles.number}>
                수강인원 {classes.numberOfStudents}명
              </dd>
              <dd className={styles.date}>
                {classes.startDate} ~ {classes.endDate}
              </dd>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default ClassPage
