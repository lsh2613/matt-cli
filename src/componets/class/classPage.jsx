import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./classPage.module.css";
import {
  fetchBeforClass,
  fetchDoingClass,
  fetchFinishedClass,
} from "@api/class/class";
import { nowDate } from "@utils/index";
const ClassPage = (props) => {
  const navigate = useNavigate();

  const [doing, setDoing] = useState([]);
  const [before, setBefore] = useState([]);
  const [finished, setFinished] = useState([]);

  useEffect(() => {
    fetchBeforClass().then((res) => setBefore(res.data));
    fetchDoingClass().then((res) => setDoing(res.data));
    fetchFinishedClass().then((res) => setFinished(res.data));
  }, []);

  const toClassInfo = (classId) => {
    navigate(`/class/${classId}`, { state: { classId: classId } });
  };

  const classSt = (startDate, endDate) => {
    if (startDate > nowDate)
      return <div className={`${styles.classSt} ${styles.will}`}>진행예정</div>;
    if (endDate > nowDate)
      return <div className={`${styles.classSt} ${styles.ing}`}>진행중</div>;
    return <div className={`${styles.classSt} ${styles.done}`}>종료</div>;
  };

  return (
    <div className={styles.container}>
      <h2>강좌조회</h2>
      <section className={styles.before}>
        <h3>🟦 수강생 모집중인 강좌목록</h3>
        <div className={styles.classes}>
          {before.map((classes) => (
            <div
              className={styles.class}
              key={classes.classId}
              onClick={() => toClassInfo(classes.classId)}
            >
              {classSt(classes.startDate, classes.endDate)}
              <dd className={styles.title}>{classes.title}</dd>
              <dd className={styles.number}>
                신청생 {classes.totalCount}명 /수강가능 인원
                {classes.numberOfStudents}명
              </dd>
              <dd className={styles.date}>
                {classes.startDate} ~ {classes.endDate}
              </dd>
            </div>
          ))}
        </div>
      </section>
      <section className={styles.doing}>
        <h3>🟩 진행중인 강좌목록</h3>
        <div className={styles.classes}>
          {doing.map((classes) => (
            <div
              className={styles.class}
              key={classes.classId}
              onClick={() => toClassInfo(classes.classId)}
            >
              {classSt(classes.startDate, classes.endDate)}
              <dd className={styles.title}>{classes.title}</dd>
              <dd className={styles.number}>수강인원 {classes.countCS}명</dd>
              <dd className={styles.date}>
                {classes.startDate} ~ {classes.endDate}
              </dd>
            </div>
          ))}
        </div>
      </section>
      <section className={styles.finished}>
        <h3>⬜ 종료된 강좌목록</h3>
        <div className={styles.classes}>
          {finished.map((classes) => (
            <div
              className={styles.class}
              key={classes.classId}
              onClick={() => toClassInfo(classes.classId)}
            >
              {classSt(classes.startDate, classes.endDate)}
              <dd className={styles.title}>{classes.title}</dd>
              <dd className={styles.number}>수강인원 {classes.countCS}명</dd>
              <dd className={styles.date}>
                {classes.startDate} ~ {classes.endDate}
              </dd>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ClassPage;
