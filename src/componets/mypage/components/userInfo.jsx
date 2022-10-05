import React, { useState } from 'react'
import styles from './userInfo.module.css'
import button from '@/common/button.module.css'
import EditNick from '../modal/editNick'
import EditPw from '../modal/editPw'
import { deleteUser } from '@api/user/user'
import { useNavigate } from 'react-router-dom'

const UserInfo = (props) => {
  const navigate = useNavigate()
  const [nickModal, setNickModal] = useState(false)
  const [pwModal, setPwModal] = useState(false)

  const updateNickVisible = (state) => {
    if (state === true) {
      setUser({
        ...user,
        nickname: localStorage.getItem('nickname'),
      })
    }
    setNickModal(false)
  }
  const updatePwVisible = () => {
    setPwModal(false)
  }

  const secession = () => {
    alert(`회원탈퇴 시, 모든 정보는 되돌릴 수 없습니다.
회원탈퇴 하시겠습니까?`)
    deleteUser().then(() => {
      navigate('/')
      localStorage.clear()
    })
  }
  const [user, setUser] = useState({
    nickname: localStorage.getItem('nickname'),
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
          <div className={styles.email}>✉️ {user.email}</div>
          <div className={styles.phonenb}>📞 {user.phoneNumber}</div>
          <div className={styles.intro}> 꿈과 열정을 가진 미친 음악가❤️</div>
        </div>
        <button
          className={`${button.fullPrimaryBtn} ${styles.profileEditBtn}`}
          onClick={() => setNickModal(true)}
        >
          닉네임 수정
        </button>
        <button
          className={`${button.fullPrimaryBtn} ${styles.profileEditBtn}`}
          onClick={() => setPwModal(true)}
        >
          패스워드 수정
        </button>
        <button
          className={`${button.fullGrayBtn} ${styles.profileEditBtn} ${styles.secession}`}
          onClick={() => secession()}
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
