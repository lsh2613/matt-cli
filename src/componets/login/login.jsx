import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signin } from '../../api/login/login'
import styles from './login.module.css'

import { useSelector, useDispatch } from 'react-redux'
import { setUserInfo } from '@/redux/reducers/user'

const Login = (props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [user, setUser] = useState({
    loginId: '',
    password: '',
  })

  const postUser = () => {
    signin(user)
      .then((res) => {
        saveInLocalStorage(res.data)
        dispatch(setUserInfo(res.data))
      })
      .catch((e) => alert(e.response.data))
  }

  const saveInLocalStorage = (user) => {
    for (let [key, value] of Object.entries(user)) {
      localStorage.setItem(key, value)
    }
    navigate('/')
  }

  const { loginId, password } = user
  const onChange = (e) => {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value,
    })
  }

  return (
    <section className={styles.loginPage}>
      <div className={styles.loginForm}>
        <div className={styles.banner}>
          <div className={styles.gra}>나만의 선생님을 만나는 곳</div>
        </div>
        <input
          className={styles.form}
          placeholder='아이디'
          onChange={onChange}
          name='loginId'
          value={loginId}
        />
        <input
          className={styles.form}
          placeholder='패스워드'
          type='password'
          name='password'
          value={password}
          onChange={onChange}
        />
        <button
          className={`${styles.form} ${styles.loginBtn}`}
          onClick={postUser}
        >
          로그인
        </button>
        <div className={styles.label}>비밀번호를 잊으셨나요?</div>
      </div>
    </section>
  )
}

export default Login
