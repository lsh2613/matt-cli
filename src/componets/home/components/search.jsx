import React, { useState, useEffect } from 'react'
import styles from './search.module.css'
import { fetchTag } from '../../../api/tag/tag'

class Search extends React.Component {
  constructor(porps) {
    super(porps)
    this.state = {
      tags: [],
    }
  }

  componentDidMount() {
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
          cus_data[idx].items.push(el)
        }
      })
      this.setState({ tags: cus_data })
    })
  }

  render() {
    return (
      <div className={styles.container}>
        {this.state.tags.map((tag, idx) => (
          <div className={styles.filterDiv} key={tag.tagInfoId}>
            <div className={styles.filterTitle}>{tag.tagName}</div>
            <div className={styles.filterGroup}>
              {tag.items.map((item, idx) => (
                <li className={styles.item} key={item.tagInfoId}>
                  {item.tagName}
                </li>
              ))}
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default Search
