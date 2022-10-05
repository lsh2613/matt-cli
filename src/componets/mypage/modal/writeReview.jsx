import React, { useState, useEffect } from 'react'
import styles from './writeReview.module.css'
import button from '@/common/button.module.css'
import modal from '@/common/modal.module.css'
import float from '@/common/float.module.css'

import { postReveiw } from '@api/review/review,'

const WriteReview = (props) => {
  const [state, setState] = useState(props.visible)
  const [form, setForm] = useState({
    classId: 0,
    reviewContent: '',
    score: 0,
  })

  const { reviewContent, score } = form

  const onChange = (e) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value,
    })
  }

  useEffect(() => {
    setState(props.visible)
    setForm({ ...form, classId: props.classId })
  }, [props.visible])

  const post = () => {
    postReveiw(form).then((res) => {
      if (res.status === 200) alert('등록되었습니다 :)')
      else alert('댓글이 등록된 게시글 입니다.')
      props.updateVisible(false)
      init()
    })
  }

  const init = () => {
    setForm({
      classId: 0,
      reviewContent: '',
      score: 0,
      studentId: localStorage.getItem('studentId'),
    })
  }
  return (
    <>
      {state ? (
        <>
          <div className={`${modal.modalContainer} ${styles.container}`}>
            <div className={styles.title}>
              리뷰 작성✍️{' '}
              <button
                className={`${button.fullPrimaryBtn} ${styles.btn} ${float.floatRight}`}
                onClick={() => post()}
              >
                작성
              </button>
            </div>

            <div className={styles.starForm}>
              <span className={styles.span}> 평점</span>
              <fieldset>
                <input
                  className={styles.radioForm}
                  type='radio'
                  onChange={onChange}
                  name='score'
                  id='rate5'
                  value='5'
                />
                <label htmlFor='rate5' className={styles.radioForm}>
                  ⭐
                </label>
                <input
                  className={styles.radioForm}
                  type='radio'
                  onChange={onChange}
                  name='score'
                  value='4'
                  id='rate4'
                />
                <label htmlFor='rate4' className={styles.radioForm}>
                  ⭐
                </label>
                <input
                  className={styles.radioForm}
                  type='radio'
                  onChange={onChange}
                  name='score'
                  value='3'
                  id='rate3'
                />
                <label htmlFor='rate3' className={styles.radioForm}>
                  ⭐
                </label>
                <input
                  className={styles.radioForm}
                  type='radio'
                  onChange={onChange}
                  name='score'
                  value='2'
                  id='rate2'
                />
                <label htmlFor='rate2' className={styles.radioForm}>
                  ⭐
                </label>
                <input
                  className={styles.radioForm}
                  type='radio'
                  onChange={onChange}
                  name='score'
                  value='1'
                  id='rate1'
                />
                <label htmlFor='rate1' className={styles.radioForm}>
                  ⭐
                </label>
              </fieldset>
            </div>

            <div className={styles.etc}>
              <textarea
                type='text'
                name='reviewContent'
                className={styles.inputForm}
                onChange={onChange}
                value={reviewContent}
                placeholder='자세하고 솔직한 리뷰는 다른 수강생에게 큰 도움이 됩니다 😊'
              />
            </div>
          </div>
          <div
            className={modal.mask}
            onClick={() => {
              setState(false)
              props.updateVisible(false)
              init()
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
