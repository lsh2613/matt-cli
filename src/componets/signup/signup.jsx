import React, { useState } from 'react'
import styles from './signup.module.css'
import { signup } from '../../api/user/user'
import { useNavigate } from 'react-router-dom'
const Signup = (props) => {
  const [user, setUser] = useState({
    birthDate: '',
    email: '',
    gender: '',
    loginId: '',
    name: '',
    nickname: '',
    password: '',
    phoneNumber: '',
  })

  const {
    birthDate,
    email,
    gender,
    loginId,
    name,
    nickname,
    password,
    phoneNumber,
  } = user
  const navigate = useNavigate()
  const onChange = (e) => {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value,
    })
  }

  const postSignup = () => {
    try {
      signup(user).then((res) => {
        //alert창 추가하기
        if (res.status === 200) {
          navigate('/login')
        }
      })
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>회원가입</div>
      <div className={styles.userForm}>
        <div className={styles.form}>
          <div className={styles.label}>아이디</div>
          <input
            type='text'
            className={styles.inpuForm}
            onChange={onChange}
            name='loginId'
            value={loginId}
          ></input>
        </div>
        <div className={styles.form}>
          <div className={styles.label}>이름</div>
          <input
            type='text'
            className={styles.inpuForm}
            onChange={onChange}
            name='name'
            value={name}
          ></input>
        </div>
        <div className={styles.form}>
          <div className={styles.label}>닉네임</div>
          <input
            type='text'
            className={styles.inpuForm}
            onChange={onChange}
            name='nickname'
            value={nickname}
          ></input>
        </div>
        <div className={styles.form}>
          <div className={styles.label}>성별</div>
          <div className={styles.radioGroup}>
            <input
              type='radio'
              className={styles.radioForm}
              id='man'
              onChange={onChange}
              name='gender'
              value='MAN'
            />
            <label htmlFor='man' className={styles.radioForm}>
              남성
            </label>
            <input
              type='radio'
              className={styles.radioForm}
              id='woman'
              onChange={onChange}
              name='gender'
              value='WOMAN'
            />
            <label htmlFor='woman' className={styles.radioForm}>
              여성
            </label>
          </div>
        </div>

        <div className={styles.form}>
          <div className={styles.label}>생년월일</div>
          <input
            type='date'
            className={styles.inpuForm}
            onChange={onChange}
            name='birthDate'
            value={birthDate}
          ></input>
        </div>
        <div className={styles.form}>
          <div className={styles.label}>전화번호</div>
          <input
            type='phone'
            className={styles.inpuForm}
            onChange={onChange}
            name='phoneNumber'
            value={phoneNumber}
          ></input>
        </div>
        <div className={styles.form}>
          <div className={styles.label}>이메일</div>
          <input
            type='text'
            className={styles.inpuForm}
            onChange={onChange}
            name='email'
            value={email}
          ></input>
        </div>
        <div className={styles.form}>
          <div className={styles.label}>패스워드</div>
          <input
            type='password'
            className={styles.inpuForm}
            onChange={onChange}
            name='password'
            value={password}
          ></input>
        </div>
        <div className={styles.form}>
          <div className={styles.label}>패스워드 확인</div>
          <input type='password' className={styles.inpuForm}></input>
        </div>
        <button className={styles.signupBtn} onClick={postSignup}>
          회원가입
        </button>
      </div>
    </div>
  )
}

export default Signup
