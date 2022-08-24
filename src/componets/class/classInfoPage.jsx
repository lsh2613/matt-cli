import React from 'react';
import styles from './classInfoPage.module.css'
import ClassInfo from './components/classInfo';

const ClassInfoPage = (props) => {

  return (
    <>
      <section id={styles.classInfo}>
        <ClassInfo />
      </section>
      <section id={styles.instuctorComment}>

      </section>

    </>
  )
}


export default ClassInfoPage;