import React, { useState, useEffect } from 'react'
import styles from './writeReview.module.css'
import button from '@/common/button.module.css'
import modal from '@/common/modal.module.css'

import { postReveiw } from '@api/review/review,'

const WriteReview = (props) => {
  const [state, setState] = useState(props.visible)
  const [form, setForm] = useState({
    classId: 0,
    reviewContent: '',
    score: 0,
    studentId: 0,
  })

  useEffect(() => {
    setState(props.visible)
  }, [props.visible])

  const post = () => {
    postReveiw(form).then((res) => {
      if (res.data === 200) alert('등록되었습니다 :)')
    })
  }
  return (
    <>
      {state ? (
        <>
          <div className={styles.container}>
            <div className={styles.title}>닉네임 변경✍️ </div>
            <button
              className={`${button.fullBtn} ${styles.btn}`}
              onClick={() => post()}
            >
              작성
            </button>
            <div className={styles.etc}></div>
          </div>
          <div
            className={modal.mask}
            onClick={() => {
              setState(false)
              props.updateVisible(false)
            }}
          ></div>
        </>
      ) : (
        ''
      )}
    </>
  )
}
export default WriteReview
