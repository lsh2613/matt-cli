import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './createclass.module.css'
import button from '@/common/button.module.css'
import { fetchWish } from '@api/wish/wish'

const WishList = (props) => {
  const navigate = useNavigate()

  const [classes, setClasses] = useState([])
  useEffect(() => {
    fetchWish().then((res) => setClasses(res.data))
  }, [])

  const toClassInfo = (classId) => {
    navigate(`/class/${classId}`, { state: { classId: classId } })
  }

  const dropWish = (wishId) => {}

  return (
    <>
      <span className={styles.title}>찜한 강의목록</span>
      <div className={styles.classList}>
        {classes.map((classes) => (
          <div
            className={styles.class}
            key={classes.classId}
            onClick={() => toClassInfo(classes.classId)}
          >
            <article className={styles.classNm}>{classes.title}</article>
            <aside className={styles.time}>{classes.category}</aside>
            <aside className={styles.cnt}>{classes.numberOfStudents}명</aside>
            <button
              className={`${button.fullBtn} ${button.red}`}
              onClick={(e) => {
                e.stopPropagation()
                dropWish(classes.classId)
              }}
            >
              삭제
            </button>
          </div>
        ))}
      </div>
    </>
  )
}

export default WishList
