import React, { useEffect, useState } from 'react'
import styles from './instructorPage.module.css'
import { fetchInstructors } from '../../api/instructor/instructor'
import { useNavigate } from 'react-router-dom'

const InstructorPage = (props) => {
  const fake = [
    'https://pbs.twimg.com/media/FZ7cYlwagAA_6QZ?format=jpg&name=large',
    'data:image/jpeg;base64,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',
    'https://www.doolymuseum.or.kr/html/images/sub0104_01.png',
  ]
  const [ins, setIns] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    fetchInstructors().then((res) => setIns(res.data))
  }, [])

  const toClassList = (insId) => {
    navigate(`/instructor/${insId}`, {
      state: { insId },
    })
  }

  return (
    <div className={styles.container}>
      {ins.map((instructor, index) => (
        <div
          className={styles.insContainer}
          key={index}
          onClick={() => toClassList(instructor?.instructorId)}
        >
          <section className={styles.imgSection}>
            <img className={styles.profileImg} src={fake[index]} alt='img' />
            <span className={styles.span}>{instructor.name} 멘토</span>
          </section>
          <section className={styles.infoSection}>
            <dd className={styles.insItem}>
              <label>전공</label>
              <span className={styles.span}> {instructor.major}</span>
            </dd>
            <dd className={styles.insItem}>
              <label>성별</label>
              <span className={styles.span}>
                {' '}
                {instructor.gender === 'MAN' ? '남' : '여'}
              </span>
            </dd>
            <dd className={styles.insItem}>
              <label>이메일</label>
              <span className={styles.span}> {instructor.email}</span>
            </dd>
            <dd className={styles.insItem}>
              <label>평점</label>
              <span className={styles.span}>⭐ 4.8점</span>
            </dd>
          </section>
        </div>
      ))}
    </div>
  )
}

export default InstructorPage
