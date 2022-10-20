import React, { useEffect } from 'react'
import styles from './createclass.module.css'
import button from '../../../common/button.module.css'
import float from '../../../common/float.module.css'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  fetchInstructorByInsId,
  updateInstructorInfo,
} from '@api/instructor/instructor'
import { useState } from 'react'

const InsInfo = (props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [disabled, setDisabled] = useState(true)
  const [insInfo, setInsInfo] = useState({})

  const insId = useSelector((state) => state.user.user.instructorId)

  const { introduction } = insInfo

  const onChange = (e) => {
    const { name, value } = e.target
    setInsInfo({
      ...insInfo,
      [name]: value,
    })
  }

  const updateInsInfo = () => {
    updateInstructorInfo(insInfo).then((res) => {
      if (res.status === 200) {
        setInsInfo(res.data)
        alert('수정되었습니다 :)')
      }
    })
  }

  useEffect(() => {
    fetchInstructorByInsId(insId).then((res) => setInsInfo(res.data[0]))
  }, [])

  return (
    <section className={styles.section}>
      <span className={styles.title}>나의 멘토 소개서</span>
      <button
        className={`${button.fullPrimaryBtn} ${float.floatRight}`}
        onClick={() => {
          if (disabled) setDisabled(false)
          else {
            setDisabled(true)
            updateInsInfo()
          }
        }}
      >
        수정하기
      </button>
      <textarea
        disabled={disabled}
        onChange={onChange}
        name='introduction'
        value={introduction}
        className={styles.description}
      ></textarea>
    </section>
  )
}

export default InsInfo
