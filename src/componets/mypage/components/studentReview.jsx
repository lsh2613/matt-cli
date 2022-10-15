import React, { useState, useEffect } from "react"
import styles from "./studentReview.module.css"
import { fetchStudentByClassId } from "@api/cs/cs"
import { useParams } from "react-router-dom"
const StudentReview = (props) => {
  const params = useParams()
  const classId = params.classId

  const [students, setStudents] = useState([])

  useEffect(() => {
    fetchStudentByClassId(classId).then((res) => setStudents(res.data))
  }, [])
  return (
    <section className={styles.studentReview}>
      <div className={styles.container}>
        <h3>학생 온도평가</h3>
      </div>
    </section>
  )
}

export default StudentReview
