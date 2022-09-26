import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { fetchClassByKeyword } from '../../api/class/class'
import styles from './searchPage.module.css'
import { nowDate } from '@/utils'
import { useSelector, useDispatch } from 'react-redux'

import { initSearch } from '@/redux/reducers/search'

const SearchPage = (props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const keyword = useSelector((state) => state.search.searchKey)
  const searched = useSelector((state) => state.search.status)

  const [searchKey, setSearchKey] = useState('')
  const [classes, setClasses] = useState([])
  useEffect(() => {
    fetchClassByKeyword(keyword).then((res) => {
      setClasses(res.data)
      setSearchKey(keyword)
    })
    dispatch(initSearch())
  }, [searched])

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
      <h4>🔍'{searchKey}' 로 검색한 결과 </h4>
      {classes.length > 0 ? (
        <div className={styles.container}>
          {classes.map((classes) => (
            <div
              className={styles.card}
              onClick={() => toClassInfo(classes.classId)}
              key={classes.classId}
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
      ) : (
        <div className={styles.container}>
          <span className={styles.span}>검색 결과가 없습니다 🧐</span>
        </div>
      )}
    </>
  )
}
export default SearchPage
