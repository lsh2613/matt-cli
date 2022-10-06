import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './wishlist.module.css'
import button from '@/common/button.module.css'
import { fetchWish, deletehWish } from '@api/wish/wish'
import ApplyClass from '../../class/components/applyClass'

const WishList = (props) => {
  const navigate = useNavigate()

  const [visible, setVisible] = useState(false)
  const [classes, setClasses] = useState([])
  const [classId, setClassId] = useState(0)

  useEffect(() => {
    fetchWish().then((res) => setClasses(res.data))
  }, [props.visible])

  const toClassInfo = (classId) => {
    navigate(`/class/${classId}`, { state: { classId: classId } })
  }

  const dropWish = (wishId) => {
    deletehWish(wishId).then((res) => {
      if (res.status === 200) {
        fetchWish().then((res) => setClasses(res.data))
      } else {
        alert('예상치 못한 오류로 실패했습니다 :(')
      }
    })
  }

  const apply = (id) => {
    setClassId(id)
    setVisible(true)
  }

  const updateVisible = () => {
    setVisible(false)
  }

  return (
    <>
      <>
        <span className={styles.title}>찜한 강의목록</span>
        <div className={styles.classList}>
          {classes.map((classes) => (
            <div
              className={styles.class}
              key={classes.wishId}
              onClick={() => toClassInfo(classes.classId)}
            >
              <article className={styles.classNm}>{classes.title}</article>
              <aside className={styles.cnt}>{classes.numberOfStudents}명</aside>
              <aside className={styles.btnGroup}>
                <button
                  className={`${button.fullGrayBtn}  ${styles.btn}`}
                  onClick={(e) => {
                    e.stopPropagation()
                    dropWish(classes.classId)
                  }}
                >
                  삭제
                </button>
                <button
                  className={`${button.fullBtn} ${button.blue} ${styles.btn}`}
                  onClick={(e) => {
                    e.stopPropagation()
                    apply(classes.classId)
                  }}
                >
                  신청
                </button>
              </aside>
            </div>
          ))}
        </div>
      </>
      <ApplyClass
        visible={visible}
        updateVisible={updateVisible}
        classId={classId}
      />
    </>
  )
}

export default WishList
