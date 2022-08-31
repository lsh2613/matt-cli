import React, { useEffect } from 'react'
import styles from './classInfo.module.css'
import { fetchClass } from '../../../api/class/class'
import button from '../../../common/button.module.css'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'

const ClassInfo = () => {
  const [classes, setClasses] = useState([])

  const location = useLocation()

  useEffect(() => {
    const classId = location.state.classId
    fetchClass(classId).then((res) => {
      setClasses({
        classes: res.data,
      })
    })
  }, [])

  return (
    <>
      <div className={styles.container}>
        <section className={styles.main}>
          <div className={styles.title}>{classes.title}</div>
          <button className={button.fullBtn}>클래스 신청</button>
        </section>

        <section className={styles.infoGroup}>
          <div className={styles.instrutorInfo}>
            <article>👩‍🎓 강사 프로필</article>
            <aside>
              <label>이름</label>김가정
            </aside>
            <aside>
              <label>전공</label>실용음악과
            </aside>
            <aside>
              <label>대학교</label>경기대학교
            </aside>
            <aside>
              <label>평점</label>⭐ 5점
            </aside>
          </div>
          <div className={styles.classInfo}>
            <aside>
              <label>카테고리</label>
              {classes.category}
            </aside>
            <aside>
              <label>기간</label>
              {classes.startDate} ~ {classes.endDate}
            </aside>
            <aside>
              <label>시간</label>
              {classes.startTime} ~ {classes.endTime}
            </aside>
            <aside>
              <label>장소</label>
              {classes.place}
            </aside>
            <aside>
              <label>수강생</label>수강신청한 학생
              {classes.numberOfStudents}
            </aside>
          </div>
        </section>
        <section className={styles.detailInfo}>{classes.descriptions}</section>
      </div>
    </>
  )
}

export default ClassInfo
