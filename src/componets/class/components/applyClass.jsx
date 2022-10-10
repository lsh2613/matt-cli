import React, { useState, useEffect } from "react";
import styles from "./applyClass.module.css";
import button from "@/common/button.module.css";
import modal from "@/common/modal.module.css";
import { applyClass } from "../../../api/wating/wating";

const ApplyClass = (props) => {
  const [state, setState] = useState(props.visible);
  const [data, setData] = useState({
    classId: props.classId,
    content: "",
  });
  const submit = () => {
    applyClass(data)
      .then((res) => {
        setState(false);
        props.updateVisible(props.classId);

        alert("신청 완료되었습니다");
      })
      .catch((e) => {
        alert(e);
      });
  };

  const { content } = data;
  const onChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  useEffect(() => {
    setState(props.visible);
    setData({ ...data, classId: props.classId });
  }, [props.visible]);

  return (
    <>
      {state ? (
        <>
          <div className={styles.container}>
            <div className={styles.title}>멘토에게 전할 메세지✍️ </div>
            <button
              className={`${button.fullPrimaryBtn} ${styles.btn}`}
              onClick={submit}
            >
              확인
            </button>
            <div className={styles.etc}>
              신청자가 많을수록 메세지 내용이 중요할 수 있어요 :)
            </div>
            <textarea
              className={styles.contents}
              name="content"
              value={content}
              onChange={onChange}
            ></textarea>
          </div>
          <div
            className={modal.mask}
            onClick={() => {
              setState(false);
              props.updateVisible(0);
            }}
          ></div>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default ApplyClass;
