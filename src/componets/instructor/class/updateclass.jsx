import React, { useState, useEffect } from 'react'
import styles from './updateclass.module.css'
import button from '../../../common/button.module.css'
import float from '../../../common/float.module.css'
import { updateClass } from '../../../api/class/class'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchClass } from '@api/class/class'
import { fetchTagByNm, createTag } from '@/api/tag/tag'
import {
  createClassTag,
  fetchClassTagByClassId,
  deleteClassTag,
} from '@api/classtag/classtag'

const UpdateClass = (props) => {
  const navigate = useNavigate()
  const params = useParams()

  const classId = params.classId

  const [classInfo, setClassInfo] = useState({})
  const [input, setInput] = useState('')
  const [tags, setTags] = useState([])

  const {
    category,
    descriptions,
    endDate,
    endTime,
    numberOfStudents,
    place,
    startDate,
    startTime,
    title,
  } = classInfo

  const onChange = (e) => {
    const { name, value } = e.target
    setClassInfo({
      ...classInfo,
      [name]: value,
    })
  }

  //태그 메소드
  const onChangeTag = (e) => {
    setInput(e.target.value)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      setInput('')
      fetchTagByNm(input)
        .then((res) => {
          const data = {
            tagName: res.data.tagName,
            tagId: res.data.tagInfoId,
          }
          setTags([...tags, data])
        })
        .catch(() => {
          createTagName()
        })
    }
  }

  const createTagName = () => {
    console.log('?')
    const data = {
      tagInfoId: 0,
      tagName: input,
    }
    createTag(data).then(() => {
      fetchTagByNm(input).then((res) => {
        const newTag = {
          tagName: res.data.tagName,
          tagId: res.data.tagInfoId,
        }
        setTags([...tags, newTag])
      })
    })
  }

  const patchData = () => {
    tags.forEach((tag) => {
      console.log(tag)
      if (!tag?.classTagId) {
        console.log(tag)
        let form = {
          classesCT: classId,
          tagClId: 0,
          tagInfo: tag.tagId,
        }
        createClassTag(form)
      }
    })
    updateClass(classInfo).then((res) => {
      if (res.status === 200) {
        alert('수정되었습니다 ')
        navigate('/mypage')
      }
    })
  }

  const delTag = (classTagId, tagId) => {
    if (classTagId) {
      deleteClassTag(classTagId).then(() => {
        let res = tags.filter((tag) => tag.tagId !== tagId)
        setTags(res)
      })
    } else {
      let res = tags.filter((tag) => tag.tagId !== tagId)
      setTags(res)
    }
  }

  useEffect(() => {
    fetchClass(classId).then((res) => setClassInfo(res.data))
    fetchClassTagByClassId(classId).then((res) => setTags(res.data))
  }, [])

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <section className={styles.section1}>
          <div className={styles.form}>
            <div className={styles.label}>클래스명</div>
            <input
              type='text'
              className={styles.inputForm}
              onChange={onChange}
              name='title'
              value={title || ''}
            ></input>
          </div>
          <div className={styles.form}>
            <div className={styles.label}>카테고리</div>
            <input
              type='text'
              className={styles.inputForm}
              onChange={onChange}
              name='category'
              value={category || ''}
            ></input>
          </div>

          <div className={styles.form}>
            <div className={styles.label}>시작 날짜</div>
            <input
              type='date'
              name='startDate'
              className={styles.inputForm}
              onChange={onChange}
              value={startDate || ''}
            ></input>
          </div>
          <div className={styles.form}>
            <div className={styles.label}>종료 날짜</div>
            <input
              type='date'
              name='endDate'
              className={styles.inputForm}
              onChange={onChange}
              value={endDate || ''}
            ></input>
          </div>
          <div className={styles.form}>
            <div className={styles.label}>시작 시간</div>
            <input
              type='time'
              name='startTime'
              className={styles.inputForm}
              onChange={onChange}
              value={startTime || ''}
            ></input>
          </div>
          <div className={styles.form}>
            <div className={styles.label}>종료 시간</div>
            <input
              type='time'
              name='endTime'
              className={styles.inputForm}
              onChange={onChange}
              value={endTime || ''}
            ></input>
          </div>
        </section>
        <section className={styles.section2}>
          <div className={styles.form}>
            <div className={styles.label}>수강인원</div>
            <select
              className={styles.inputForm}
              onChange={onChange}
              value={numberOfStudents || ''}
              name='numberOfStudents'
            >
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
              <option value='6'>6</option>
              <option value='7'>7</option>
              <option value='8'>8</option>
            </select>
          </div>
          <div className={styles.form}>
            <div className={styles.label}>장소</div>
            <input
              type='text'
              name='place'
              className={styles.inputForm}
              onChange={onChange}
              value={place || ''}
            ></input>
          </div>

          <div className={styles.form}>
            <div className={styles.label}>태그</div>
            <input
              type='text'
              className={styles.inputForm}
              placeholder='생성하고 싶은 태그를 입력하세요'
              onChange={onChangeTag}
              onKeyPress={handleKeyPress}
              value={input}
            ></input>
            <div className={styles.tagClassContainer}>
              {tags.map((tag, index) => (
                <li className={styles.item} key={index}>
                  <ol className={styles.tagNm}>{tag.tagName}</ol>
                  <ol
                    className={styles.tagDel}
                    onClick={() => delTag(tag.classTagId, tag.tagId)}
                  >
                    X
                  </ol>
                </li>
              ))}
            </div>
          </div>
          <div className={styles.form}>
            <div className={styles.label}>설명</div>
            <textarea
              type='text'
              name='descriptions'
              className={styles.inputForm}
              onChange={onChange}
              value={descriptions || ''}
            ></textarea>
          </div>
        </section>
      </div>
      <button
        className={` ${button.fullPrimaryBtn} ${float.floatRight}`}
        onClick={patchData}
      >
        수정하기
      </button>
    </div>
  )
}
export default UpdateClass
