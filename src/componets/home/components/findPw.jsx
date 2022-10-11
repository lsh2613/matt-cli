import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './findPw.module.css'
import button from '@/common/button.module.css'
import { findPw } from '@api/user/user'
const FindPw = (props) => {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    loginId: '',
    email: '',
  })

  const [state, setState] = useState(false)
  const { loginId, email } = user

  const onChange = (e) => {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value,
    })
  }

  const sendEmail = () => {
    findPw(user)
      .then(() => {
        setState(true)
      })
      .catch((e) => alert(e.response.data.message))
  }

  return (
    <>
      <div className={styles.container}>
        <section className={styles.section}>
          {state ? (
            <>
              <h4>이메일로 전송된 비밀번호로 로그인을 진행하세요</h4>
              <button
                onClick={() => navigate('/login')}
                className={`${button.fullPrimaryBtn} ${styles.loginBtn}`}
              >
                로그인 하러가기
              </button>
            </>
          ) : (
            <>
              <div className={styles.banner}>
                <div className={styles.gra}>패스워드 찾기</div>
              </div>
              <label className={styles.label}>가입한 아이디</label>
              <input
                className={styles.form}
                placeholder='아이디'
                onChange={onChange}
                name='loginId'
                value={loginId}
              />
              <label className={styles.label}>가입 시 입력한 이메일</label>
              <input
                className={styles.form}
                placeholder='이메일'
                type='email'
                name='email'
                value={email}
                onChange={onChange}
              />
              <button
                onClick={sendEmail}
                className={`${button.fullPrimaryBtn} ${styles.loginBtn}`}
              >
                이메일 전송하기
              </button>
            </>
          )}
        </section>
      </div>
    </>
  )
}
export default FindPw
