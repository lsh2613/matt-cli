import React, { useState, useEffect } from "react";
import styles from "./updateclass.module.css";
import button from "../../../common/button.module.css";
import float from "../../../common/float.module.css";
import { updateClass } from "../../../api/class/class";
import { useNavigate, useLocation } from "react-router-dom";

import { fetchClass } from "../../../api/class/class";

const UpdateClass = (props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const classId = location.state.classId;

  const [classInfo, setClassInfo] = useState({});

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
  } = classInfo;

  const onChange = (e) => {
    const { name, value } = e.target;
    setClassInfo({
      ...classInfo,
      [name]: value,
    });
  };

  const patchData = () => {
    updateClass(classInfo).then((res) => {
      if (res.status === 200) {
        alert("수정되었습니다 ");
        navigate("/mypage");
      }
    });
  };

  useEffect(() => {
    fetchClass(classId).then((res) => setClassInfo(res.data[0]));
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <section className={styles.section1}>
          <div className={styles.form}>
            <div className={styles.label}>클래스명</div>
            <input
              type="text"
              className={styles.inputForm}
              onChange={onChange}
              name="title"
              value={title || ""}
            ></input>
          </div>
          <div className={styles.form}>
            <div className={styles.label}>카테고리</div>
            <input
              type="text"
              className={styles.inputForm}
              onChange={onChange}
              name="category"
              value={category || ""}
            ></input>
          </div>
          <div className={styles.form}>
            <div className={styles.label}>수강인원</div>
            <select
              className={styles.inputForm}
              onChange={onChange}
              value={numberOfStudents || ""}
              name="numberOfStudents"
            >
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
            <input
              type="date"
              name="startDate"
              className={styles.inputForm}
              onChange={onChange}
              value={startDate || ""}
            ></input>
          </div>
          <div className={styles.form}>
            <div className={styles.label}>종료 날짜</div>
            <input
              type="date"
              name="endDate"
              className={styles.inputForm}
              onChange={onChange}
              value={endDate || ""}
            ></input>
          </div>
        </section>
        <section className={styles.section2}>
          <div className={styles.form}>
            <div className={styles.label}>요일</div>
            <input
              type="text"
              name="daysId"
              className={styles.inputForm}
              onChange={onChange}
            ></input>
          </div>
          <div className={styles.form}>
            <div className={styles.label}>시작 시간</div>
            <input
              type="time"
              name="startTime"
              className={styles.inputForm}
              onChange={onChange}
              value={startTime || ""}
            ></input>
          </div>
          <div className={styles.form}>
            <div className={styles.label}>종료 시간</div>
            <input
              type="time"
              name="endTime"
              className={styles.inputForm}
              onChange={onChange}
              value={endTime || ""}
            ></input>
          </div>
          <div className={styles.form}>
            <div className={styles.label}>장소</div>
            <input
              type="text"
              name="place"
              className={styles.inputForm}
              onChange={onChange}
              value={place || ""}
            ></input>
          </div>

          <div className={styles.form}>
            <div className={styles.label}>설명</div>
            <textarea
              type="text"
              name="descriptions"
              className={styles.inputForm}
              onChange={onChange}
              value={descriptions || ""}
            ></textarea>
          </div>
        </section>
      </div>
      <button
        className={` ${button.fullPrimaryBtn} ${float.floatRight}`}
        onClick={patchData}
      >
        수정하기
      </button>
    </div>
  );
};
export default UpdateClass;
