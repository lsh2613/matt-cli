import React, { useState } from 'react'
import styles from './signup.module.css'
import { signup } from '../../api/user/user'
import { useNavigate } from 'react-router-dom'
const Signup = (props) => {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    id: 0,
    birthDate: '',
    email: '',
    gender: '',
    loginId: '',
    name: '',
    nickname: '',
    password: '',
    phoneNumber: '',
    checkPw: '',
  })

  const [emailCheck, setEmailCheck] = useState(false)
  const [pwCompare, setPwCompare] = useState(false)
  const {
    birthDate,
    email,
    gender,
    loginId,
    name,
    nickname,
    password,
    phoneNumber,
    checkPw,
  } = user

  const onChange = (e) => {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value,
    })
    if (name === 'phoneNumber') autoHyphen()
    if (name === 'email') checkEmail()
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
  const checkEmail = () => {
    var reg_email =
      /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/
    if (!reg_email.test(email)) {
      setEmailCheck(true)
    } else {
      setEmailCheck(false)
    }
  }

  const autoHyphen = () => {
    let hypen = 'zz'

    setUser({
      ...user,
      [phoneNumber]: hypen,
    })
  }

  const compare = () => {
    if (user.password === '') setPwCompare(true)
    if (user.password !== user.check) setPwCompare(true)
    if (!emailCheck && !pwCompare) postSignup()
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>회원가입</div>
      <div className={styles.userForm}>
        <div className={styles.form}>
          <div className={styles.label}>아이디</div>
          <input
            type='text'
            className={styles.inputForm}
            onChange={onChange}
            name='loginId'
            value={loginId}
          ></input>
        </div>
        <div className={styles.form}>
          <div className={styles.label}>이름</div>
          <input
            type='text'
            className={styles.inputForm}
            onChange={onChange}
            name='name'
            value={name}
          ></input>
        </div>
        <div className={styles.form}>
          <div className={styles.label}>닉네임</div>
          <input
            type='text'
            className={styles.inputForm}
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
            className={styles.inputForm}
            onChange={onChange}
            name='birthDate'
            value={birthDate}
          ></input>
        </div>
        <div className={styles.form}>
          <div className={styles.label}>전화번호</div>
          <input
            type='phone'
            className={styles.inputForm}
            onChange={onChange}
            name='phoneNumber'
            value={phoneNumber}
          ></input>
        </div>
        <span className={styles.red}>
          {emailCheck ? '이메일 형식을 지켜주세요' : ''}
        </span>
        <div className={styles.form}>
          <div className={styles.label}>이메일</div>
          <input
            type='text'
            className={styles.inputForm}
            onChange={onChange}
            name='email'
            value={email}
          ></input>
        </div>
        <span className={styles.red}>
          {pwCompare ? '패스워드 정보가 다릅니다' : ''}
        </span>
        <div className={styles.form}>
          <div className={styles.label}>패스워드</div>
          <input
            type='password'
            className={styles.inputForm}
            onChange={onChange}
            name='password'
            value={password}
          ></input>
        </div>

        <div className={styles.form}>
          <div className={styles.label}>패스워드 확인</div>
          <input
            type='password'
            className={styles.inputForm}
            onChange={onChange}
            name='checkPw'
            value={checkPw}
          ></input>
        </div>
        <button className={styles.signupBtn} onClick={compare}>
          회원가입
        </button>
      </div>
    </div>
  )
}

export default Signup
