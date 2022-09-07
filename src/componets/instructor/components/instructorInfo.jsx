import React, { useEffect, useState } from 'react'
import styles from './instructorInfo.module.css'
import { fetchClassByInsId } from '../../../api/class/class'
import { fetchInstructorByInsId } from '../../../api/instructor/instructor'
import { useLocation } from 'react-router-dom'
import InsProfile from './insProfile'
import ClassList from './classList'
import InsReview from './insReview'

const InstructorInfo = (props) => {
  const location = useLocation()
  const insId = location.state.insId

  const [ins, setIns] = useState(location.state.insId)
  useEffect(() => {
    setIns(insId)
  }, [insId])

  return (
    <div className={styles.container}>
      <InsProfile insId={ins} />

      <ClassList insId={ins} />

      <InsReview />
    </div>
  )
}

export default InstructorInfo
