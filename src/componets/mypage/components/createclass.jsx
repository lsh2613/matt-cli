import React, { useState } from "react"
import styles from "./createclass.module.css"
import button from "../../../common/button.module.css"
import float from "../../../common/float.module.css"
import { useNavigate } from "react-router-dom"
import { fetchClassByInsId } from "../../../api/class/class"
import { useEffect } from "react"

const CreatedClass = (props) => {
  const navigate = useNavigate()
  const [classes, setClasses] = useState([])

  const toClassInfo = (classId) => {
    navigate(`/class/${classId}`, { state: { classId: classId } })
  }

  const toWaiting = (classId) => {
    navigate(`/class/${classId}/waiting`, { state: { classId: classId } })
  }


  const classSt = (classSt, classId) => {
    if (classSt === 1)
      return (
        <button
          className={`${button.borderGrayBtn} ${styles.showDetails}`}
          onClick={(e) => {
            console.log(classes.classId)
            e.stopPropagation()
            toWaiting(classId)
          }}
        >
          신청자 관리
        </button>
      )
    else if (classSt === 3)
      return (
        <button className={`${button.borderGrayBtn} ${styles.showDetails}`}>
          클래스 진행
        </button>
      )
    else if (classSt === 5)
      return (
        <button className={`${button.borderGrayBtn} ${styles.showDetails}`}>
          클래스 종료
        </button>
      )
    else if (classSt === 9)
      return (
        <button disabled className={`${button.end} ${styles.showDetails}`}>
          종료
        </button>
      )
  }

  useEffect(() => {
    fetchClassByInsId(localStorage.getItem("instructorId")).then(
      (res) => setClasses(res.data)````
    )
  }, [])
  return (
    <section className={styles.section}>
      <span className={styles.title}>내가 개설한 클래스</span>
      <button
        className={`${button.fullPrimaryBtn} ${float.floatRight}`}
        onClick={() => {
          navigate("/makeclass")
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
            <aside className={styles.category}>{classes.category}</aside>
            <aside className={styles.time}>
              {classes.startTime} ~ {classes.endTime}
            </aside>
            <aside className={styles.cnt}>{classes.numberOfStudents}명</aside>
            {classSt(classes.classSt, classes.classId)}

          
          </div>
        ))}
      </div>
    </section>
  )
}

export default CreatedClass
