import React, { useState, useEffect } from 'react'
import button from '@/common/button.module.css'
import modal from '@/common/modal.module.css'
import styles from './editPw.module.css'
import { editPw } from '../../../api/user/user'

const EditPw = (props) => {
  const [state, setState] = useState(props.visible)
  const [pw, setPw] = useState({
    newPw: '',
    check: '',
  })
  const [err, setErr] = useState(false)
  const [nullErr, setNullErr] = useState(false)

  const { newPw, check } = pw

  const onChange = (e) => {
    const { name, value } = e.target
    setPw({ ...pw, [name]: value })
  }

  useEffect(() => {
    setState(props.visible)
  }, [props.visible])

  const edit = () => {
    editPw(newPw)
      .then((res) => {
        alert('변경되었습니다 :)')
      })
      .catch((e) => {
        console.log(e)
      })
    props.updateVisible(false)
    init()
  }

  const init = () => {
    setPw({
      newPw: '',
      check: '',
    })
    setErr(false)
    setNullErr(false)
  }
  const compare = () => {
    setNullErr(false)
    setErr(false)
    if (pw.newPw === '') setNullErr(true)
    if (pw.newPw !== '' && pw.newPw === pw.check) edit()
    if (pw.newPw !== pw.check) setErr(true)
  }
  return (
    <>
      {state ? (
        <>
          <div className={`${modal.modalContainer} ${styles.container}`}>
            <div className={styles.title}>패스워드 변경 </div>
            <button
              className={`${button.fullPrimaryBtn} ${styles.btn}`}
              onClick={() => compare()}
            >
              수정
            </button>
            <div className={styles.etc}>
              <div className={styles.before}>
                <dd className={styles.label}>
                  패스워드
                  <span className={styles.red}>
                    {nullErr ? '공란이 올 수 없습니다' : ''}
                  </span>
                </dd>
                <input
                  type='password'
                  value={newPw}
                  name='newPw'
                  onChange={onChange}
                  className={styles.inputForm}
                />
              </div>
              <div className={styles.after}>
                <dd className={styles.label}>
                  패스워드 재확인{' '}
                  <span className={styles.red}>
                    {err ? '패스워드가 다릅니다' : ''}
                  </span>
                </dd>
                <input
                  type='password'
                  value={check}
                  name='check'
                  onChange={onChange}
                  className={styles.inputForm}
                />
              </div>
            </div>
          </div>
          <div
            className={modal.mask}
            onClick={() => {
              setState(false)
              props.updateVisible(false)
              init()
            }}
          ></div>
        </>
      ) : (
        ''
      )}
    </>
  )
}

export default EditPw
