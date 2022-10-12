import React, { useState, useEffect } from 'react'
import styles from './createclass.module.css'
import button from '@/common/button.module.css'
import { fetchClass, deleteStudent } from '@api/wating/wating'
import { useNavigate } from 'react-router-dom'
import UpdateApplyClass from '../../class/components/updateApplyClass'

const WaitingClass = (props) => {
  const navigate = useNavigate()
  const [visible, setVisible] = useState(false)
  const [classes, setClasses] = useState([])
  const [wsId, setWsId] = useState(0)
  useEffect(() => {
    fetchClass().then((res) => setClasses(res.data))
  }, [])

  const toClassInfo = (classId) => {
    navigate(`/class/${classId}`, {
      state: { classId: classId, classSt: true },
    })
  }
  const dropWs = (wsId) => {
    deleteStudent(wsId).then(() => {
      fetchClass().then((res) => setClasses(res.data))
    })
  }

  const update = (wsId) => {
    setWsId(wsId)
    setVisible(true)
  }

  const updateVisible = () => {
    setVisible(false)
  }

  return (
    <>
      <span className={styles.title}>대기중인 강의</span>
      <div className={styles.classList}>
        {classes.map((classes) => (
          <div
            className={styles.class}
            key={classes.waitingStudentId}
            onClick={() => toClassInfo(classes.classId)}
          >
            <article className={styles.classNm}>{classes.title}</article>

            <aside className={styles.category}>{classes.category}</aside>
            <aside className={styles.cnt}>{classes.numberOfStudents}명</aside>
            <aside className={styles.btnGroup}>
              <button
                className={`${button.fullGrayBtn}  ${styles.btn}`}
                onClick={(e) => {
                  e.stopPropagation()
                  dropWs(classes.waitingStudentId)
                }}
              >
                취소
              </button>
              <button
                className={`${button.fullBtn} ${button.blue} ${styles.btn}`}
                onClick={() => update(classes.waitingStudentId)}
              >
                수정
              </button>
            </aside>
          </div>
        ))}
      </div>
      <UpdateApplyClass
        visible={visible}
        updateVisible={updateVisible}
        wsId={wsId}
      />
    </>
  )
}
export default WaitingClass
