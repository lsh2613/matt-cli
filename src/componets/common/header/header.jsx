import React from 'react';
import styles from './header.module.css'

const Header = ({onLogout}) => {
  return (
  <header className={styles.header}>
    <div classNmae={styles.logo}>Mat-t</div>
    {onLogout ? (
      <button className={styles.btn} onClick={onLogout}>
        로그아웃
      </button>
    ):(
      <button className={styles.btn} onClick={onLogout}>
        로그인
      </button>
    )}
  </header>
  )
}

export default Header;