import React, { useEffect, useState } from 'react'
import styles from './header.module.css'
import button from '../../../common/button.module.css'
import { useNavigate } from 'react-router-dom'
import { log_out } from '../../../api/login/login'

const Header = () => {
  const [hover, setHover] = useState(false)
  const [login, setLogin] = useState('')
  const navigate = useNavigate()

  const onLogout = () => {
    log_out().then(localStorage.clear())
    setLogin()
  }

  const toMypage = () => {
    navigate('/mypage')
  }

  // useEffect(() => {
  //   setLogin(localStorage.getItem('id'))
  // }, [])

  return (
    <header className={styles.header}>
      <img
        src='img/logo.png'
        alt='logo'
        className={styles.logo}
        onClick={() => {
          navigate('/')
        }}
      />
      <div className={styles.menu}>
        <li className={styles.menuList}>카테고리</li>
        <li className={styles.menuList}>멘토조회</li>
      </div>
      {login ? (
        <div className={styles.floatRight}>
          <span className={styles.signUpBtn} onClick={toMypage}>
            마이페이지
          </span>
          <button className={button.fullBtn} onClick={onLogout}>
            로그아웃
          </button>
        </div>
      ) : (
        <div className={styles.floatRight}>
          <span
            className={styles.signUpBtn}
            onClick={() => {
              navigate('/signup')
            }}
          >
            회원가입
          </span>
          <button
            className={button.borderBtn}
            onClick={() => {
              navigate('/login')
            }}
          >
            로그인
          </button>
        </div>
      )}
    </header>
  )
}

export default Header
