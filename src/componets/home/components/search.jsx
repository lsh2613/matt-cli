import React, { useState, useEffect, useRef } from 'react'
import styles from './search.module.css'
import button from '@/common/button.module.css'
import { fetchTagByNm, createTag } from '@/api/tag/tag'
import { fetchClassByTags } from '@/api/classtag/classtag'

const Search = (props) => {
  const [tags, setTags] = useState([])
  const [input, setInput] = useState('')

  const [classes, setClasses] = useState([])

  const onChange = (e) => {
    setInput(e.target.value)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      setInput('')
      fetchTagByNm(input)
        .then((res) => {
          setTags([...tags, res.data])
        })
        .catch(() => {
          createTagName()
        })
    }
  }

  const delTag = (tagId) => {
    let res = tags.filter((tag) => tag.tagInfoId !== tagId)
    setTags(res)
  }

  const createTagName = () => {
    const data = {
      tagInfoId: 0,
      tagName: input,
    }
    createTag(data).then(() => {
      fetchTagByNm(input).then((res) => {
        setTags([...tags, res.data])
      })
    })
  }

  useEffect(() => {
    fetchClassByTags(tags).then((res) => setClasses(res.data))
  }, [tags])

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
    <div className={styles.classTagSection}>
      <div className={styles.container}>
        <div className={styles.classTagHeader}>
          <dd>🏷️ 태그입력</dd>
          <dd
            className={`${styles.resetBtn} ${button.primary}`}
            onClick={() => setTags([])}
          >
            초기화
          </dd>
        </div>

        <input
          type='text'
          className={styles.inputForm}
          value={input}
          onChange={onChange}
          onKeyPress={handleKeyPress}
        ></input>
        <div className={styles.filterGroup}>
          {tags.map((tag) => (
            <li className={styles.item} key={tag.tagInfoId}>
              <ol className={styles.tagNm}>{tag.tagName}</ol>
              <ol
                className={styles.tagDel}
                onClick={() => delTag(tag.tagInfoId)}
              >
                X
              </ol>
            </li>
          ))}
        </div>
      </div>

      <div className={styles.tagClassContainer}>
        {tags.length > 0 ? (
          <>
            <div className={styles.title}>🔍 태그 결과 클래스</div>

            {classes.length > 0 ? (
              <div className={styles.cardContainer}>
                {classes.map((classes) => (
                  <div
                    className={styles.card}
                    onClick={() => toClassInfo(classes.classId)}
                    key={classes.classId}
                  >
                    <div className={styles.classTitle}>{classes.title}</div>
                    <div className={styles.contents}>
                      <div className={styles.etc}>
                        {classes.startDate} ~ {classes.endDate}
                      </div>
                      <div className={styles.etc}>
                        모집 인원
                        <span className={styles.bold}>
                          {classes.numberOfStudents}명
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className={styles.none}> 결과가 없습니다 :( </div>
            )}
          </>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default Search
