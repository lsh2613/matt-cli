import React, { useEffect, useState } from 'react'
import styles from './instructorPage.module.css'
import { fetchInstructors } from '../../api/instructor/instructor'
import { useNavigate } from 'react-router-dom'

const InstructorPage = (props) => {
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
      <h2>멘토조회</h2>
      <section className={styles.section}>
        {ins.map((instructor, index) => (
          <div
            className={styles.insContainer}
            key={index}
            onClick={() => toClassList(instructor?.instructorId)}
          >
            <section className={styles.imgSection}>
              <img
                className={styles.profileImg}
                src={require(`../../utils/image/${instructor.instructorId}.png`)}
                alt='png'
              />
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
                <span className={styles.span}>
                  {instructor.score !== -1
                    ? `⭐${instructor.score}점`
                    : '점수없음'}
                </span>
              </dd>
            </section>
          </div>
        ))}
      </section>
    </div>
  )
}

export default InstructorPage
