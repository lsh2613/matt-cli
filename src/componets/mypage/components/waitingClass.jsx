import React, { useState, useEffect } from "react";
import styles from "./createclass.module.css";
import button from "@/common/button.module.css";
import { fetchClass } from "@api/wating/wating";
const WaitingClass = (props) => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetchClass().then((res) => setClasses(res.data));
  }, []);
  return (
    <>
      <span className={styles.title}>대기중인 강의</span>
      <div className={styles.classList}>
        {classes.map((classes) => (
          <div
            className={styles.class}
            key={classes.classId}
            onClick={() => toClassInfo(classes.classId)}
          >
            <article className={styles.classNm}>{classes.title}</article>

            <aside className={styles.category}>{classes.category}</aside>
            <aside className={styles.cnt}>{classes.numberOfStudents}명</aside>

            <button
              className={`${button.fullGrayBtn} ${styles.showDetails}`}
              disabled
            >
              수정
            </button>
          </div>
        ))}
      </div>
    </>
  );
};
export default WaitingClass;
