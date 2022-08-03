import React, { useState } from 'react';
import styles from './header.module.css';
import Container from 'react-bootstrap/Container';
import { useNavigate } from "react-router-dom";

const Header = ({ onLogout }) => {
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();
  return (
    <Container>
      <header className={styles.header}>
        <img src="img/logo.png" alt="logo" className={styles.logo}></img>
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
          <button className={hover ? `${styles.btn} ${styles.hover}` : styles.btn}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={() => {
              navigate("/login")
            }}>
            로그인
          </button>
        )}
      </header>
    </Container >
  )
}

export default Header;