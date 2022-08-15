import React from 'react';
import styles from './mypage.module.css';
import button from '../../common/button.module.css';
const MyPage = (props) => {
  return (
    <div className={styles.container}>
      <section className={styles.profile}>
        <img src="img/profile.png" alt="프로필" className={styles.profileImg} />
        <div className={styles.userInfo}>
          <div className={styles.nicknm}>👤 김가궁</div>
          <div className={styles.birth}>🎂 1997년 8월 10일</div>
          <div className={styles.phonenb}>📞 010-4145-4436</div>
          <div className={styles.intro}> 꿈과 열정을 가진 미친 음악가❤️</div>
        </div>
        <button className={`${button.fullBtn} ${styles.profileEditBtn}`}>프로필 수정</button>
      </section>

      <div className={styles.class}>
        <section className={styles.notCertify}>
          <div className={styles.title}>선생님 인증하기</div>
          <p>나의 클래스를 창설하고 싶다면, 선생님 인증을 진행해 주세요 :)</p>
        </section>
        <section className={styles.certify}>
          <div className={styles.title}>내가 개설한 클래스</div>
        </section>
      </div>
    </div>
  )
}

export default MyPage;