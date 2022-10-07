import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCategory, fetchaAllCommunity } from '@api/community/community'
import { onChangeMenu } from '../../redux/reducers/community'
import styles from './community.module.css'

const CommunityPage = (props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const menu = useSelector((state) => state.community.menu)

  const [category, setCategory] = useState([])
  const [community, setCommunity] = useState([])

  const onChange = (e) => {
    const value = e.target.value
    dispatch(onChangeMenu(value))
  }

  useEffect(() => {
    fetchCategory().then((res) => setCategory(res.data))
    fetchaAllCommunity().then((res) => setCommunity(res.data))
  }, [])
  return (
    <div className={styles.container}>
      <section className={styles.menuSection}>
        <div className={styles.menuContainer}>
          <hgroup className={styles.radioGroup}>
            <input
              type='radio'
              name='menu'
              id='전체'
              checked={menu === '전체'}
              className={styles.radioForm}
              value='전체'
              onChange={onChange}
            ></input>
            <label htmlFor='전체' className={styles.radioForm}>
              전체
            </label>
            {category.map((item, index) => (
              <>
                <input
                  key={index}
                  type='radio'
                  id={item}
                  name='menu'
                  value={item}
                  checked={menu === item}
                  className={styles.radioForm}
                  onChange={onChange}
                ></input>
                <label htmlFor={item} className={styles.radioForm}>
                  {item}
                </label>
              </>
            ))}
          </hgroup>
        </div>
      </section>
      <section className={styles.communitySection}>
        <div className={styles.communityContainer}>
          {community.map((data, index) => (
            <li key={index} className={styles.item}>
              <dd className={styles.category}>{data.category}</dd>
              <dd className={styles.title}>{data.title}</dd>
              <dd className={styles.content}>{data.content}</dd>
              <div className={styles.row}>
                <dd className={styles.numOfLikes}>👍🏻{data.numOfLikes}</dd>
                <dd className={styles.numOfComments}>💬{data.numOfComments}</dd>
                <dd className={styles.pastTime}>{data.pastTime}</dd>
              </div>
              <hr className={styles.hr} />
            </li>
          ))}
        </div>
      </section>
    </div>
  )
}

export default CommunityPage
