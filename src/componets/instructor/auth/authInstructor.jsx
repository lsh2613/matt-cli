import React, { useState } from 'react'
import styles from './authInstructor.module.css'
import button from '../../../common/button.module.css'
import float from '../../../common/float.module.css'
import { createIns } from '../../../api/instructor/instructor'

const AuthInstructor = (props) => {
  const [form, setForm] = useState({
    instructorId: 0,
    major: '',
    userIn: localStorage.getItem('studentId'),
  })

  const { major } = form
  const onChange = (e) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value,
    })
  }

  const postAuth = () => {
    if (form.major !== '') {
      try {
        createIns(form).then((res) => {
          if (res.state === 200)
            localStorage.setItem('instructor', res.data.instructorId)
        })
      } catch (e) {
        console.log(e)
      }
    } else {
      alert('공백은 입력하실 수 없습니다')
    }
  }

  return (
    <>
      <div className={styles.container}>
        <h3>강사 인증하기</h3>
        <button
          className={` ${button.fullBtn} ${float.floatRight}`}
          onClick={postAuth}
        >
          인증하기
        </button>
        <div className={styles.form}>
          <div className={styles.label}>전공</div>
          <input
            type='text'
            className={styles.inpuForm}
            onChange={onChange}
            name='major'
            value={major}
          ></input>
        </div>
      </div>
    </>
  )
}
export default AuthInstructor
