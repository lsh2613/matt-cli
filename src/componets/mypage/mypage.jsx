import React, { useState } from 'react'
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
  const [menu, setMenu] = useState('class-menu')

  const onChange = (e) => {
    const value = e.target.id
    setMenu(value)
  }

  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <UserInfo />
      </section>

      <div className={styles.class}>
        <hgroup className={styles.radioGroup}>
          <input
            type='radio'
            id='class-menu'
            name='menu'
            className={styles.radioForm}
            defaultChecked={menu}
            onChange={onChange}
          ></input>
          <label htmlFor='class-menu' className={styles.radioForm}>
            클래스
          </label>
          <input
            type='radio'
            id='wish-menu'
            name='menu'
            className={styles.radioForm}
            onChange={onChange}
          ></input>
          <label htmlFor='wish-menu' className={styles.radioForm}>
            위시리스트
          </label>
          <input
            type='radio'
            id='mentor-menu'
            name='menu'
            className={styles.radioForm}
            onChange={onChange}
          ></input>
          <label htmlFor='mentor-menu' className={styles.radioForm}>
            멘토
          </label>
        </hgroup>

        {menu === 'mentor-menu' ? (
          insId === 'null' ? (
            <section className={styles.section}>
              <div className={styles.title}>선생님 인증하기</div>
              <p className={styles.auth} onClick={toAuth}>
                나의 클래스를 창설하고 싶다면, 선생님 인증을 진행해 주세요 :
              </p>
            </section>
          ) : (
            //멘토가 창설한 강의
            <section className={styles.section}>
              <CreatedClass />
            </section>
          )
        ) : (
          ''
        )}

        {menu === 'class-menu' ? (
          <section>
            <TakeClass />
          </section>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default MyPage
