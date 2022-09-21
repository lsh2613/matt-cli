import React, { useState, useEffect } from 'react'
import button from '@/common/button.module.css'
import modal from '@/common/modal.module.css'
import styles from './editNick.module.css'
const EditNick = (props) => {
  const [state, setState] = useState(props.visible)

  useEffect(() => {
    setState(props.visible)
  }, [props.visible])
  return (
    <>
      {state ? (
        <>
          <div className={styles.container}>
            <div className={styles.title}>닉네임 변경✍️ </div>
            <button className={`${button.fullBtn} ${styles.btn}`}>수정</button>
            <div className={styles.etc}>
              <div className={styles.before}>
                <dd className={styles.label}>변경전</dd>
                <dd className={styles.nick}>
                  {localStorage.getItem('nickname')}
                </dd>
              </div>
              <div>→</div>
              <div className={styles.after}>
                <dd className={styles.label}>변경후</dd>
                <input type='text' className={styles.inputForm} />
              </div>
            </div>
          </div>
          <div
            className={modal.mask}
            onClick={() => {
              setState(false)
              props.updateVisible(false)
            }}
          ></div>
        </>
      ) : (
        ''
      )}
    </>
  )
}

export default EditNick
