import React from 'react'
import styles from './footer.module.css'

const Footer = (props) => {
  return (
    <>
      <div className={styles.back}></div>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.con1}>
            <dd className={styles.company}>(주)매티</dd>
            <dd className={styles.etc}>대표이사 : 김가정 </dd>
            <dd className={styles.etc}>
              임원진 : 강정수, 장현석, 이승헌, 이지영
            </dd>
            <dd className={styles.etc}>
              개인정보관리책임자 : 강정수 (kjs@naver.com)
            </dd>
            <dd className={styles.etc}>
              매티는 매칭 중개자로서 판매 당사자가 아니며, 강사가 등록한
              강사정보 및 거래에 매티는 책임을 지지 않습니다.
            </dd>
          </div>
          <div className={styles.con2}>
            <dd className={styles.etc}>
              {' '}
              <span className={styles.bold}>고객문의</span> vkdnjdjxor@naver.com
            </dd>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
