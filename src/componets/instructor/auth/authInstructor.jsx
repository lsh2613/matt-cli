import React, { useState } from 'react'
import styles from './authInstructor.module.css'
import button from '../../../common/button.module.css'
import float from '../../../common/float.module.css'
import { createIns } from '../../../api/instructor/instructor'
import { useNavigate } from 'react-router-dom'

const AuthInstructor = (props) => {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    instructorId: 0,
    major: '',
    introduction: '',
    userIn: localStorage.getItem('studentId'),
  })

  const { major, introduction } = form
  const onChange = (e) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value,
    })
  }

  const postAuth = () => {
    if (form.major !== '') {
      createIns(form).then((res) => {
        if (res.status === 200) {
          localStorage.setItem('instructorId', res.data.instructorId)
          alert('인증 완료되었습니다 :) ')
          navigate('/mypage')
        }
      })
    } else {
      alert('공백은 입력하실 수 없습니다')
    }
  }

  return (
    <>
      <div className={styles.container}>
        <h3>멘토 인증하기</h3>
        <button
          className={` ${button.fullPrimaryBtn} ${float.floatRight} ${styles.absolute}`}
          onClick={postAuth}
        >
          인증하기
        </button>
        <section className={styles.inputGroup}>
          <div className={styles.form}>
            <div className={styles.label}>전공</div>
            <input
              type='text'
              className={styles.inputForm}
              onChange={onChange}
              name='major'
              value={major}
            ></input>
          </div>
          <div className={styles.form}>
            <div className={styles.label}>강사소개</div>
            <textarea
              type='text'
              name='introduction'
              className={styles.inputForm}
              onChange={onChange}
              value={introduction}
            ></textarea>
          </div>
        </section>
      </div>
    </>
  )
}
export default AuthInstructor
