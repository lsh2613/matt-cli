import React,{useState} from 'react';
import styles from './header.module.css'

const Header = ({onLogout}) => {
  const [hover, setHover] = useState(false);

  return (
  <header className={styles.header}>
    <div className={styles.logo}>Mat-t</div>
    <div className={styles.menu}>
      <li className={styles.menuList}>카테고리</li>
      <li className={styles.menuList}>멘토조회</li>
    </div>
    {onLogout ? (
      <button
   
      onClick={onLogout}>
        로그아웃
      </button>
    ):(
      <button className={hover?`${styles.btn} ${styles.hover}`:styles.btn}
      onMouseEnter={()=> setHover(true)}
      onMouseLeave = {()=>setHover(false)}
      onClick={onLogout}>
        로그인
      </button>
    )}
  </header>
  )
}

export default Header;