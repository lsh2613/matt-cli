import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signin } from '../../api/login/login'
import styles from './login.module.css'

const Login = (props) => {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    loginName: '',
    password: '',
  })

  const postUser = () => {
    console.log(user)
    try {
      signin(user).then((res) => {
        if (res.status === 200) saveInLocalStorage(res.data)
        else alert('로그인 정보를 다시 확인하세요')
      })
    } catch (e) {
      console.log(e)
    }
  }

  const saveInLocalStorage = (user) => {
    for (let [key, value] of Object.entries(user)) {
      localStorage.setItem(key, value)
    }
    navigate('/')
  }

  const { loginName, password } = user
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
          name='loginName'
          value={loginName}
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
