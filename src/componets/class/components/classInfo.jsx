import React from 'react'
import styles from './classInfo.module.css'
import ApplyClass from './applyClass'
import Review from './review'
import { fetchClass } from '@api/class/class'
import { fetchClassTagByClassId } from '@api/classtag/classtag'
import { useState, useEffect } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import button from '@/common/button.module.css'
import { useSelector } from 'react-redux'
import { nowDate } from '@utils/index'
import { postWish } from '@api/wish/wish'
import { makeClassFinished } from '@api/cs/cs'

const ClassInfo = (props) => {
  const navigate = useNavigate()
  const params = useParams()

  const [classes, setClasses] = useState({})
  const [visible, setVisible] = useState(false)
  //클래스 상태에 따른 상태 코드
  const [classState, setClassState] = useState(true)

  const [tags, setTags] = useState([])
  const instructorId = parseInt(localStorage.getItem('instructorId'))
  const location = useLocation()

  const classId = params.classId
  const login = useSelector((state) => state.user.login)
  const classSt = (classSt) => {
    if (classSt === 1)
      return <div className={`${styles.classSt} ${styles.will}`}>진행예정</div>
    else if (classSt === 3)
      return <div className={`${styles.classSt} ${styles.will}`}>모집완료</div>
    else if (classSt === 5)
      return <div className={`${styles.classSt} ${styles.ing}`}>진행중</div>
    else if (classSt === 9)
      return <div className={`${styles.classSt} ${styles.done}`}>종료</div>
  }
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
    navigate(`/updateclass/${classId}`)
  }
  const setWish = () => {
    postWish(classId).then((res) =>
      res.status === 200 ? alert('찜완료 :) ') : alert('이미 찜했습니다')
    )
  }
  useEffect(() => {
    fetchClass(classId).then((res) => {
      setClasses(res.data)
    })
    fetchClassTagByClassId(classId).then((res) => setTags(res.data))
  }, [])

  const setFinished = () => {
    makeClassFinished(classId).then((res) => {
      if (res.status === 200) setClassState(false)
    })
  }

  const toClassList = (insId) => {
    navigate(`/instructor/${classes.instructorId}`, {
      state: { insId },
    })
  }

  const showBtn = (insId, classSt) => {
    if (insId !== instructorId && classSt === 1)
      return (
        <div className={styles.btnGroup}>
          <button
            className={`${button.fullBtn} ${button.red}  ${styles.marginRight}`}
            onClick={setWish}
          >
            🤍 찜하기
          </button>
          <button className={button.fullPrimaryBtn} onClick={apply}>
            클래스 신청
          </button>
        </div>
      )
    if (insId === instructorId && classSt === 1)
      return (
        <div className={styles.btnGroup}>
          <button
            className={`${button.fullPrimaryBtn} ${styles.marginRight}`}
            onClick={() => toUpdateClass(classes.classId)}
          >
            클래스 수정
          </button>
          <button
            className={`${button.fullBtn} ${button.blue}`}
            onClick={() => {}}
          >
            클래스 진행
          </button>
        </div>
      )

    if (insId === instructorId && classSt === 3)
      return (
        <div className={styles.btnGroup}>
          <button
            className={button.fullGrayBtn}
            onClick={() => setFinished(classes.classId)}
          >
            클래스 종료
          </button>
        </div>
      )
  }

  return (
    <>
      <div className={styles.container}>
        <section className={styles.main}>
          {classSt(classes.classSt)}
          <div className={styles.title}>{classes.title}</div>

          {showBtn(classes.instructorId, classes.classSt)}
        </section>

        <section className={styles.infoGroup}>
          <div
            className={styles.instrutorInfo}
            onClick={() => toClassList(classes.instructorId)}
          >
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
              {classes.totalCount}/ {classes.numberOfStudents}
            </aside>
          </div>
        </section>
        <section className={styles.tagGroup}>
          {tags.map((tag) => (
            <span key={tag.tagId} className={styles.tag}>
              {tag.tagName}
            </span>
          ))}
        </section>
        <section className={styles.detailInfo}>
          <h3>📋 강의 소개</h3>
          <hr />
          {classes.descriptions}
        </section>
        {classes.classSt === 9 ? (
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
