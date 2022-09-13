import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { fetchClassByKeyword } from '../../api/class/class'
import styles from './searchPage.module.css'
const SearchPage = (props) => {
  const date = new Date()
  const location = useLocation()
  const navigate = useNavigate()
  const [keyword, setKeyword] = useState('')
  const [classes, setClasses] = useState([])
  const [nowDate, setNowDate] = useState(`${date.toISOString().slice(0, 10)}`)

  useEffect(() => {
    fetchClassByKeyword(location.state.keyword).then((res) => {
      setKeyword(location.state.keyword)
      setClasses(res.data)
    })
  }, [])

  const toClassInfo = (classId) => {
    navigate(`/class/${classId}`, { state: { classId: classId } })
  }

  const classSt = (startDate, endDate) => {
    if (startDate > nowDate)
      return <div className={`${styles.classSt} ${styles.will}`}>진행예정</div>
    if (endDate > nowDate)
      return <div className={`${styles.classSt} ${styles.ing}`}>진행중</div>
    return <div className={`${styles.classSt} ${styles.done}`}>종료</div>
  }

  return (
    <>
      <h4>🔍'{keyword}' 로 검색한 결과 </h4>
      <div className={styles.container}>
        {classes.map((classes) => (
          <div
            className={styles.card}
            onClick={() => toClassInfo(classes.classId)}
          >
            {classSt(classes.startDate, classes.endDate)}

            <div className={styles.classTitle}>{classes.title}</div>
            <div className={styles.contents}>
              <div className={styles.etc}>김가정 멘토</div>
              <div className={styles.etc}>
                {classes.startDate} ~ {classes.endDate}
              </div>
              <div className={styles.etc}>
                모집인원 {classes.numberOfStudents}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
export default SearchPage
