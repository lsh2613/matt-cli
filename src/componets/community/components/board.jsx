import React, { useEffect, useState } from 'react'
import styles from './board.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import {
  fetchByCommunityId,
  createComment,
  deleteComment,
  updateComment,
} from '@api/community/community'
const CommunityBoard = (props) => {
  const params = useParams()

  const id = params.communityId
  const [data, setData] = useState({})
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState('')
  const [edit, setEdit] = useState({
    commentId: 0,
    content: '',
  })

  const userId = useSelector((state) => state.user.user.studentId)

  const onChange = (e) => {
    setNewComment(e.target.value)
  }

  const editHandleKeyPress = (e) => {
    if (e.key === 'Enter') {
      updateComment(edit).then(() => {
        setEdit({ ...edit, ['commentId']: 0, ['content']: '' })
        fetchByCommunityId(id).then((res) => {
          setComments(res.data.commentList)
        })
      })
    }
  }

  const onChangeEdit = (e) => {
    setEdit({ ...edit, ['content']: e.target.value })
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') submitComment()
  }

  const submitComment = () => {
    createComment(id, newComment).then((res) => {
      fetchByCommunityId(id).then((res) => {
        setComments(res.data.commentList)
      })
    })
    setNewComment('')
  }

  const update = (commentId, commentData) => {
    setEdit({ ...edit, ['commentId']: commentId, ['content']: commentData })
  }

  useEffect(() => {
    fetchByCommunityId(id).then((res) => {
      setData(res.data)
      setComments(res.data.commentList)
    })
  }, [])
  return (
    <>
      <section className={styles.container}>
        <div className={styles.contents}>
          <dd className={styles.category}>{data.category}</dd>
          <dd className={styles.title}>{data.title}</dd>
          <div className={styles.row2}>
            <dd className={styles.userName}>{data.userName}</dd>
            <dd className={styles.pastTime}>{data.pastTime}</dd>
          </div>
          <hr className={styles.hr} />
          <dd className={styles.content}>{data.content}</dd>
          <div className={styles.row}>
            <dd className={styles.numOfLikes}>👍🏻{data.numOfLikes}</dd>
            <dd className={styles.numOfComments}>💬{data.numOfComments}</dd>
          </div>
          <hr className={styles.hr} />
        </div>

        <div className={styles.comments}>
          <div className={styles.searchForm}>
            <input
              onChange={onChange}
              onKeyPress={handleKeyPress}
              placeholder='댓글을 남겨보세요'
              value={newComment}
            />
            <button
              className={`${styles.fullPrimaryBtn} ${styles.searchBtn}`}
              onClick={submitComment}
            >
              확인
            </button>
          </div>

          {comments.map((comment) => (
            <div key={comment.commentId} className={styles.comment}>
              <div className={styles.white}>
                <div className={styles.commentRow}>
                  <dd className={styles.nick}>{comment.writer}</dd>
                  {parseInt(userId) === comment.userId ? (
                    <div className={styles.right}>
                      <span
                        className={styles.span}
                        onClick={() => {
                          deleteComment(comment.commentId).then(() => {
                            fetchByCommunityId(id).then((res) => {
                              setComments(res.data.commentList)
                            })
                          })
                        }}
                      >
                        삭제
                      </span>
                      |
                      <span
                        className={styles.span}
                        onClick={() => {
                          update(comment.commentId, comment.content)
                        }}
                      >
                        수정
                      </span>
                    </div>
                  ) : (
                    ''
                  )}
                </div>
                {edit.commentId === comment.commentId ? (
                  <input
                    type='text'
                    name='content'
                    value={edit.content || ''}
                    onChange={onChangeEdit}
                    onKeyPress={editHandleKeyPress}
                    className={styles.inputForm}
                  />
                ) : (
                  <dd className={styles.commentContent}>{comment.content}</dd>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default CommunityBoard
