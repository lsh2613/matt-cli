import React, { useState } from 'react'
import styles from './makeclass.module.css'
import button from '../../../common/button.module.css'
import float from '../../../common/float.module.css'
import { postClass } from '../../../api/class/class'
import { useNavigate } from 'react-router-dom'

const MakeClass = (props) => {
  const navigate = useNavigate()
  const [classInfo, setClassInfo] = useState({
    category: '',
    classId: 0,
    descriptions: '',
    endDate: '',
    endTime: '',
    instructorId: localStorage.getItem('instructorId'),
    numberOfStudents: 0,
    place: '',
    startDate: '',
    startTime: '',
    title: '',
  })

  const {
    category,
    descriptions,
    endDate,
    endTime,
    numberOfStudents,
    place,
    startDate,
    startTime,
    title,
  } = classInfo

  const onChange = (e) => {
    const { name, value } = e.target
    setClassInfo({
      ...classInfo,
      [name]: value,
    })
  }

  const postData = () => {
    postClass(classInfo).then((res) => {
      if (res.status === 200) navigate('/mypage')
    })
  }

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <section className={styles.section1}>
          <div className={styles.form}>
            <div className={styles.label}>클래스명</div>
            <input
              type='text'
              className={styles.inpuForm}
              onChange={onChange}
              name='title'
              value={title}
            ></input>
          </div>
          <div className={styles.form}>
            <div className={styles.label}>카테고리</div>
            <input
              type='text'
              className={styles.inpuForm}
              onChange={onChange}
              name='category'
              value={category}
            ></input>
          </div>
          <div className={styles.form}>
            <div className={styles.label}>수강인원</div>
            <select
              className={styles.inpuForm}
              onChange={onChange}
              value={numberOfStudents}
              name='numberOfStudents'
            >
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
              <option value='6'>6</option>
              <option value='7'>7</option>
              <option value='8'>8</option>
            </select>
          </div>
          <div className={styles.form}>
            <div className={styles.label}>시작 날짜</div>
            <input
              type='date'
              name='startDate'
              className={styles.inpuForm}
              onChange={onChange}
              value={startDate}
            ></input>
          </div>
          <div className={styles.form}>
            <div className={styles.label}>종료 날짜</div>
            <input
              type='date'
              name='endDate'
              className={styles.inpuForm}
              onChange={onChange}
              value={endDate}
            ></input>
          </div>
        </section>
        <section className={styles.section2}>
          <div className={styles.form}>
            <div className={styles.label}>요일</div>
            <input
              type='text'
              name='daysId'
              className={styles.inpuForm}
              onChange={onChange}
            ></input>
          </div>
          <div className={styles.form}>
            <div className={styles.label}>시작 시간</div>
            <input
              type='time'
              name='startTime'
              className={styles.inpuForm}
              onChange={onChange}
              value={startTime}
            ></input>
          </div>
          <div className={styles.form}>
            <div className={styles.label}>종료 시간</div>
            <input
              type='time'
              name='endTime'
              className={styles.inpuForm}
              onChange={onChange}
              value={endTime}
            ></input>
          </div>
          <div className={styles.form}>
            <div className={styles.label}>장소</div>
            <input
              type='text'
              name='place'
              className={styles.inpuForm}
              onChange={onChange}
              value={place}
            ></input>
          </div>

          <div className={styles.form}>
            <div className={styles.label}>설명</div>
            <textarea
              type='text'
              name='descriptions'
              className={styles.inpuForm}
              onChange={onChange}
              value={descriptions}
            ></textarea>
          </div>
        </section>
      </div>
      <button
        className={` ${button.fullBtn} ${float.floatRight}`}
        onClick={postData}
      >
        제출하기
      </button>
    </div>
  )
}
export default MakeClass
