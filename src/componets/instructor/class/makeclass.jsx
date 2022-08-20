import React from 'react';
import styles from './makeclass.module.css'
const MakeClass = (props) => {
  return (
    <div className={styles.container}>
      <section className={styles.section}>

        <div className={styles.form}>
          <div className={styles.label}>클래스명</div>
          <input type="text" className={styles.inpuForm} ></input>
        </div>
        <div className={styles.form}>
          <div className={styles.label}>수강인원</div>
          <select className={styles.inpuForm} >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select>
        </div>
        <div className={styles.form}>
          <div className={styles.label}>시작 날짜</div>
          <input type="date" className={styles.inpuForm} ></input>
        </div>
        <div className={styles.form}>
          <div className={styles.label}>종료 날짜</div>
          <input type="date" className={styles.inpuForm} ></input>
        </div>
      </section>
      <section className={styles.section}>

        <div className={styles.form}>
          <div className={styles.label}>요일</div>
          <input type="text" className={styles.inpuForm} ></input>
        </div>
        <div className={styles.form}>
          <div className={styles.label}>장소</div>
          <input type="text" className={styles.inpuForm} ></input>
        </div>
        <div className={styles.form}>
          <div className={styles.label}>카테고리</div>
          <input type="text" className={styles.inpuForm} ></input>
        </div>
        <div className={styles.form}>
          <div className={styles.label}>설명</div>
          <textarea type="text" className={styles.inpuForm} ></textarea>
        </div>
      </section>


    </div>
  )
}
export default MakeClass;