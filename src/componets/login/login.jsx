import React from 'react';
import styles from './login.module.css'

const Login = (props) => {

  return (
    <section className={styles.loginPage}>
      <div className={styles.loginForm} >
        <div className={styles.banner}>
          <span className={styles.gra}>나만의 선생님을 만나는 곳</span> 매티</div>
        <input className={styles.form} placeholder="아이디" />
        <input
          className={styles.form}
          placeholder="패스워드"
          type="password" />
        <button className={`${styles.form} ${styles.loginBtn}`}>로그인</button>
        <div className={styles.label}>비밀번호를 잊으셨나요?</div>
      </div >
    </section>
  )
}

export default Login;