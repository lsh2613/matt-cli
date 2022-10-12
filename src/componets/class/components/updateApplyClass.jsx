import React, { useState, useEffect } from 'react'
import styles from './applyClass.module.css'
import button from '@/common/button.module.css'
import modal from '@/common/modal.module.css'
import { fetchWsByWsId, updateContent } from '../../../api/wating/wating'

const UpdateApplyClass = (props) => {
  const [state, setState] = useState(props.visible)
  const wsId = props.wsId
  const [data, setData] = useState({
    wsId: wsId,
    content: '',
  })
  const submit = () => {
    updateContent(data)
      .then((res) => {
        setState(false)
        props.updateVisible()
        alert('변경 완료되었습니다')
      })
      .catch((e) => {
        alert(e)
      })
  }

  const { content } = data
  const onChange = (e) => {
    const { name, value } = e.target
    setData({
      ...data,
      [name]: value,
    })
  }

  useEffect(() => {
    setState(props.visible)
    fetchWsByWsId(wsId).then((res) => {
      setData({ ...data, ['content']: res.data.content })
    })
  }, [props.visible])

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
              수정
            </button>
            <div className={styles.etc}>
              신청자가 많을수록 메세지 내용이 중요할 수 있어요 :)
            </div>
            <textarea
              className={styles.contents}
              name='content'
              value={content}
              onChange={onChange || ''}
            ></textarea>
          </div>
          <div
            className={modal.mask}
            onClick={() => {
              setState(false)
              props.updateVisible(0)
            }}
          ></div>
        </>
      ) : (
        ''
      )}
    </>
  )
}

export default UpdateApplyClass
