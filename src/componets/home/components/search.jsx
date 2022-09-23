import React, { useState, useEffect, useRef } from 'react'
import styles from './search.module.css'
import { fetchTag } from '../../../api/tag/tag'

const Search = (props) => {
  const [tags, setTags] = useState([])
  const tag = useRef(null)
  useEffect(() => {
    //tag 정보 Dom 입력에 편리하도록 커스텀
    fetchTag().then((res) => {
      const data = res.data
      let cus_data = []
      let idx = -1
      data.forEach((el) => {
        if (el.tagInfoId % 100 === 0) {
          idx += 1
          let obj = el
          obj['items'] = []
          cus_data.push(obj)
        } else {
          el.state = false
          cus_data[idx].items.push(el)
        }
      })
      setTags(cus_data)
    })
  }, [])

  const changeState = (item) => {
    if (item.state === false) {
      return (
        <li
          className={styles.item}
          key={item.tagInfoId}
          onClick={() => changeState(item)}
        >
          {item.tagName}
        </li>
      )
    }
    return (
      <li
        className={styles.clicked}
        key={item.tagInfoId}
        onClick={() => changeState(item)}
      >
        {item.tagName}
      </li>
    )
  }

  return (
    <div className={styles.container}>
      {tags.map((tag) => (
        <div className={styles.filterDiv} key={tag.tagInfoId}>
          <div className={styles.filterTitle}>{tag.tagName}</div>
          <div className={styles.filterGroup}>
            {tag.items.map((item) => changeState(item))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Search
