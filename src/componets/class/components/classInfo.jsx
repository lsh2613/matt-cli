import React from 'react'
import styles from './classInfo.module.css'
import ApplyClass from './applyClass'
import Review from './review'
import { fetchClass } from '@api/class/class'
import { fetchClassTagByClassId } from '@api/classtag/classtag'
import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import button from '@/common/button.module.css'
import { useSelector } from 'react-redux'
import { nowDate } from '@utils/index'
const ClassInfo = (props) => {
  const navigate = useNavigate()

  const [classes, setClasses] = useState({})
  const [visible, setVisible] = useState(false)
  const [tags, setTags] = useState([])
  const instructorId = parseInt(localStorage.getItem('instructorId'))
  const location = useLocation()
  const classStatus = location.state.classSt
  const classId = location.state.classId
  const login = useSelector((state) => state.user.login)

  const apply = () => {
    if (login) setVisible(true)
    else {
      alert('로그인 후 신청 가능합니다.')
      navigate('/login')
    }
  }

  const updateVisible = () => {
    setVisible(false)
  }

  const toUpdateClass = (classId) => {
    navigate(`/updateclass/${classId}`, { state: { classId: classId } })
  }

  useEffect(() => {
    fetchClass(classId).then((res) => {
      setClasses(res.data)
    })
    fetchClassTagByClassId(classId).then((res) => setTags(res.data))
  }, [])

  const showBtn = (insId, startDate) => {
    if (insId !== instructorId && startDate > nowDate)
      return (
        <button className={button.fullBtn} onClick={apply}>
          클래스 신청
        </button>
      )

    if (insId === instructorId && startDate > nowDate)
      return (
        <div className={styles.btnGroup}>
          <button
            className={`${button.fullBtn} ${styles.marginRight}`}
            onClick={() => toUpdateClass(classes.classId)}
          >
            클래스 수정
          </button>
          <button className={button.fullGrayBtn}>클래스 종료</button>
        </div>
      )
  }

  return (
    <>
      <div className={styles.container}>
        <section className={styles.main}>
          <div className={styles.title}>{classes.classes}</div>

          {showBtn(classes.instructorId, classes.startDate)}
        </section>

        <section className={styles.infoGroup}>
          <div className={styles.instrutorInfo}>
            <article>👩‍🎓 멘토 프로필</article>
            <aside>
              <label>이름</label>
              {classes.instructorName}
            </aside>
            <aside>
              <label>전공</label>
              {classes.instructorMajor}
            </aside>
            <aside>
              <label>평점</label>{' '}
              {classes.instructorScore === -1
                ? '점수없음 '
                : `⭐${classes.instructorScore}점`}
            </aside>
          </div>
          <div className={styles.classInfo}>
            <aside>
              <label className={styles.marginRight}>카테고리</label>
              {classes.category}
            </aside>
            <aside>
              <label className={styles.marginRight}>기간</label>
              {classes.startDate} ~ {classes.endDate}
            </aside>
            <aside>
              <label className={styles.marginRight}>시간</label>
              {classes.startTime} ~ {classes.endTime}
            </aside>
            <aside>
              <label className={styles.marginRight}>장소</label>
              {classes.place}
            </aside>
            <aside>
              <label className={styles.marginRight}>신청현황</label>
              {classes.countWS}/ {classes.numberOfStudents}
            </aside>
          </div>
        </section>
        <section className={styles.detailInfo}>
          <h3>📋 강의 소개</h3>
          <hr />
          {classes.descriptions}
        </section>
        {classes.endDate < nowDate || classStatus ? (
          <section className={styles.reviewContainer}>
            <h3>💬 클래스 리뷰</h3>
            <hr />
            <Review classId={classId} />
          </section>
        ) : (
          ''
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
