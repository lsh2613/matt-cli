import React from 'react'
import FinishedClass from './finishedClass'
import DoingClass from './doingClass'
import styles from './takeClass.module.css'
const TakeClass = (props) => {
  //수강중인 강의

  return (
    <>
      <section className={styles.section}>
        <DoingClass />
      </section>
      <section className={styles.section}>
        <FinishedClass />
      </section>
    </>
  )
}

export default TakeClass
