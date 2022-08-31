import React, { useState } from 'react'
import styles from './mypage.module.css'
import button from '../../common/button.module.css'
import CreatedClass from './components/createclass'

const MyPage = (props) => {
  const [user, setUser] = useState({
    id: localStorage.getItem('id'),
    loginId: localStorage.getItem('loginId'),
    nickname: localStorage.getItem('nickname'),
    gender: localStorage.getItem('gender'),
    birthday: localStorage.getItem('birthDate'),
    email: localStorage.getItem('email'),
    phoneNumber: localStorage.getItem('phoneNumber'),
    auth: localStorage.getItem('auth'),
    instructor: localStorage.getItem('instructor'),
  })

  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <img src='img/profile.png' alt='프로필' className={styles.profileImg} />
        <div className={styles.userInfo}>
          <div className={styles.nicknm}>👤 {user.nickname}</div>
          <div className={styles.birth}>🎂 {user.birthday}</div>
          <div className={styles.phonenb}>📞 {user.phoneNumber}</div>
          <div className={styles.intro}> 꿈과 열정을 가진 미친 음악가❤️</div>
        </div>
        <button className={`${button.fullBtn} ${styles.profileEditBtn}`}>
          프로필 수정
        </button>
      </section>

      <div className={styles.class}>
        {!user.instructor ? (
          <section className={styles.section}>
            <div className={styles.title}>선생님 인증하기</div>
            <p className={styles.auth}>
              나의 클래스를 창설하고 싶다면, 선생님 인증을 진행해 주세요 :)
            </p>
          </section>
        ) : (
          <section className={styles.section}>
            <CreatedClass />
          </section>
        )}
      </div>
    </div>
  )
}

export default MyPage
