import React, { useEffect, useState } from 'react'
import styles from './insProfile.module.css'
import { fetchInstructorByInsId } from '../../../api/instructor/instructor'

const InsProfile = (props) => {
  const [ins, setIns] = useState({})
  useEffect(() => {
    const insId = props?.insId

    fetchInstructorByInsId(insId).then((res) => {
      setIns(res.data[0])
    })
  }, [])
  return (
    <section className={styles.insProfile}>
      <h3>🧑‍🎓 멘토 프로필</h3>
      <div className={styles.insContainer}>
        <li className={styles.item}>
          <dd>멘토명</dd>
          <dl>{ins.name}</dl>
        </li>
        <li className={styles.item}>
          <dd>전공</dd>
          <dl> {ins.major}</dl>
        </li>
        <li className={styles.item}>
          <dd>이메일</dd>
          <dl>{ins.email}</dl>
        </li>
        <li className={styles.item}>
          <dd>성별</dd>
          <dl>{ins.gender === 'MAN' ? '남' : '여'}</dl>
        </li>
        <li className={styles.item}>
          <dd>평점</dd>
          <dl>⭐ 4.8점</dl>
        </li>
      </div>
    </section>
  )
}

export default InsProfile
