import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './mypage.module.css'
import CreatedClass from './components/createclass'
import TakeClass from './components/takeClass'
import UserInfo from './components/userInfo'

const MyPage = (props) => {
  const navigate = useNavigate()
  const insId = localStorage.getItem('instructorId')
  const toAuth = () => {
    navigate('/instructor/auth')
  }

  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <UserInfo />
      </section>

      <div className={styles.class}>
        {insId === 'null' ? (
          <section className={styles.section}>
            <div className={styles.title}>선생님 인증하기</div>
            <p className={styles.auth} onClick={toAuth}>
              나의 클래스를 창설하고 싶다면, 선생님 인증을 진행해 주세요 :)
            </p>
          </section>
        ) : (
          //멘토가 창설한 강의
          <section className={styles.section}>
            <CreatedClass />
          </section>
        )}

        {/* 수강중인 강의  */}
        <section>
          <TakeClass />
        </section>
      </div>
    </div>
  )
}

export default MyPage
