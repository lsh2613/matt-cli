import React from 'react'
import styles from './classInfo.module.css'
import ApplyClass from './applyClass'
import Review from './review'
import { fetchClass } from '@/api/class/class'
import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import button from '@/common/button.module.css'
import { nowDate } from '@utils/index'
const ClassInfo = () => {
  const navigate = useNavigate()

  const [classes, setClasses] = useState({
    classes: {},
  })
  const [visible, setVisible] = useState(false)

  const instructorId = parseInt(localStorage.getItem('instructorId'))

  const location = useLocation()
  const classId = location.state.classId

  const apply = () => {
    setVisible(true)
  }

  const updateVisible = () => {
    setVisible(false)
  }

  const toUpdateClass = (classId) => {
    navigate(`/updateclass/${classId}`, { state: { classId: classId } })
  }

  const showBtn = (insId, startDate) => {
    if (insId !== instructorId && startDate > nowDate)
      return (
        <button className={button.fullBtn} onClick={apply}>
          클래스 신청
        </button>
      )

    if (insId === instructorId && startDate > nowDate)
      return (
        <button
          className={button.fullBtn}
          onClick={() => toUpdateClass(classes.classes.classId)}
        >
          클래스 수정
        </button>
      )
  }

  useEffect(() => {
    const classId = location.state.classId
    fetchClass(classId).then((res) => {
      setClasses({
        classes: res.data[0],
      })
    })
  }, [])

  return (
    <>
      <div className={styles.container}>
        <section className={styles.main}>
          <div className={styles.title}>{classes.classes.title}</div>

          {showBtn(classes.classes.instructorId, classes.classes.startDate)}
        </section>

        <section className={styles.infoGroup}>
          <div className={styles.instrutorInfo}>
            <article>👩‍🎓 멘토 프로필</article>
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
              {classes.classes.category}
            </aside>
            <aside>
              <label>기간</label>
              {classes.classes.startDate} ~ {classes.classes.endDate}
            </aside>
            <aside>
              <label>시간</label>
              {classes.classes.startTime} ~ {classes.classes.endTime}
            </aside>
            <aside>
              <label>장소</label>
              {classes.classes.place}
            </aside>
            <aside>
              <label>수강생</label>수강신청한 학생 0/{' '}
              {classes.classes.numberOfStudents}
            </aside>
          </div>
        </section>
        <section className={styles.detailInfo}>
          <h3>📋 강의 소개</h3>
          <hr />
          {classes.classes.descriptions}
        </section>
        {classes.classes.instructorId === instructorId ? (
          ''
        ) : (
          <section className={styles.reviewContainer}>
            <h3>💬 클래스 리뷰</h3>
            <hr />
            <Review classId={classId} />
          </section>
        )}
      </div>
      <ApplyClass
        visible={visible}
        updateVisible={updateVisible}
        classId={classId}
      />
    </>
  )
}

export default ClassInfo
