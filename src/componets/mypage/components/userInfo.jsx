import React, { useState } from 'react'
import styles from './userInfo.module.css'
import button from '@/common/button.module.css'
import EditNick from '../modal/editNick'
import EditPw from '../modal/editPw'

const UserInfo = (props) => {
  const [nickModal, setNickModal] = useState(false)
  const [pwModal, setPwModal] = useState(false)

  const updateNickVisible = () => {
    setNickModal(false)
  }
  const updatePwVisible = () => {
    setPwModal(false)
  }
  const [user, setUser] = useState({
    id: localStorage.getItem('studentId'),
    loginId: localStorage.getItem('loginId'),
    nickname: localStorage.getItem('nickname'),
    gender: localStorage.getItem('gender'),
    birthday: localStorage.getItem('birthDate'),
    email: localStorage.getItem('email'),
    phoneNumber: localStorage.getItem('phoneNumber'),
  })
  return (
    <>
      <div className={styles.profile}>
        <img src='img/profile.png' alt='프로필' className={styles.profileImg} />
        <div className={styles.userInfo}>
          <div className={styles.nicknm}>👤 {user.nickname}</div>
          <div className={styles.birth}>🎂 {user.birthday}</div>
          <div className={styles.phonenb}>📞 {user.phoneNumber}</div>
          <div className={styles.intro}> 꿈과 열정을 가진 미친 음악가❤️</div>
        </div>
        <button
          className={`${button.fullBtn} ${styles.profileEditBtn}`}
          onClick={() => setNickModal(true)}
        >
          닉네임 수정
        </button>
        <button
          className={`${button.fullBtn} ${styles.profileEditBtn}`}
          onClick={() => setPwModal(true)}
        >
          패스워드 수정
        </button>
        <button
          className={`${button.fullGrayBtn} ${styles.profileEditBtn} ${styles.secession}`}
        >
          회원탈퇴
        </button>
      </div>
      <EditNick visible={nickModal} updateVisible={updateNickVisible} />
      <EditPw visible={pwModal} updateVisible={updatePwVisible} />
    </>
  )
}

export default UserInfo
