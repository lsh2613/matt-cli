import React, { useState, useEffect } from 'react'
import button from '@/common/button.module.css'
import modal from '@/common/modal.module.css'
import styles from './editNick.module.css'
import { editNickNm } from '../../../api/user/user'
const EditNick = (props) => {
  const [state, setState] = useState(props.visible)
  const [newNick, setNewNick] = useState('')

  const { nick } = newNick

  const onChange = (e) => {
    const { name, value } = e.target
    setNewNick(value)
  }

  useEffect(() => {
    setState(props.visible)
  }, [props.visible])

  const edit = () => {
    editNickNm(newNick).then((res) => {
      if (res.status === 200) alert('변경되었습니다 :)')
      else alert('오류가 발생했습니다 :(')
    })
    props.updateVisible(false)
  }
  return (
    <>
      {state ? (
        <>
          <div className={`${modal.modalContainer} ${styles.container}`}>
            <div className={styles.title}>닉네임 변경👾 </div>
            <button
              className={`${button.fullBtn} ${styles.btn}`}
              onClick={() => edit()}
            >
              수정
            </button>
            <div className={styles.etc}>
              <div className={styles.before}>
                <dd className={styles.label}>변경전</dd>
                <input
                  type='text'
                  disabled
                  className={styles.inputForm}
                  placeholder={localStorage.getItem('nickname')}
                />
              </div>
              <div className={styles.arrow}>→</div>
              <div className={styles.after}>
                <dd className={styles.label}>변경후</dd>
                <input
                  type='text'
                  className={styles.inputForm}
                  value={nick}
                  name='nick'
                  onChange={onChange}
                />
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
