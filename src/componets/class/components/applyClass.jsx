import React, { useState, useEffect } from 'react';
import styles from "./applyClass.module.css";
import button from "../../../common/button.module.css"
import float from "../../../common/float.module.css"
import modal from "../../../common/modal.module.css"
const ApplyClass = (props) => {
  const [state, setState] = useState(props.visible)
  const submit = () => {
    setState(false)
    //부모의 visible 변경 
    props.updateVisible(false)
  }

  useEffect(() => {
    setState(props.visible)
  }, [props.visible]);

  return (
    <>
      {state ? (
        <>
          <div className={styles.container}>
            <div className={styles.title}>멘토에게 전할 메세지✍️ </div>
            <button className={`${button.fullBtn} ${styles.btn}`} onClick={submit}>확인</button>
            <div className={styles.etc}>신청자가 많을수록 메세지 내용이 중요할 수 있어요 :)</div>
            <textarea className={styles.contents}></textarea>
          </div>
          <div className={modal.mask}></div>
        </>
      ) : ''}
    </>
  )
}

export default ApplyClass;