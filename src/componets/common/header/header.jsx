import React, { useState } from 'react';
import styles from './header.module.css';
import button from '../../../common/button.module.css'
import { useNavigate } from "react-router-dom";

const Header = ({ onLogout }) => {
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();
  return (

    <header className={styles.header}>
      <img src="img/logo.png" alt="logo" className={styles.logo} onClick={() => {
        navigate("/")
      }} />
      <div className={styles.menu}>
        <li className={styles.menuList}>카테고리</li>
        <li className={styles.menuList}>멘토조회</li>
      </div>
      {onLogout ? (
        <button

          onClick={onLogout}>
          로그아웃
        </button>
      ) : (
        <div className={styles.floatRight}>
          <span className={styles.signUpBtn}
            onClick={() => {
              navigate("/signup")
            }}> 회원가입</span>
          <button className={button.fullBtn}
            onClick={() => {
              navigate("/login")
            }}>
            로그인
          </button>
        </div>
      )}
    </header>

  )
}

export default Header;