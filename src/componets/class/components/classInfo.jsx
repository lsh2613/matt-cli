import React from 'react'
import styles from './classInfo.module.css'
import { fetchClass } from '../../../api/class/class'
import button from '../../../common/button.module.css'

class ClassInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      class: '',
      id: 4,
    }
  }

  componentDidMount() {
    fetchClass(this.state.id).then((res) => {
      console.log(res.data)
      this.setState({
        class: res.data,
      })
    })
  }

  render() {
    return (
      <>
        <div className={styles.container}>
          <section className={styles.main}>
            <div className={styles.title}>{this.state.class.title}</div>
            <button className={button.fullBtn}>클래스 신청</button>
          </section>

          <section className={styles.infoGroup}>
            <div className={styles.instrutorInfo}>
              <article>👩‍🎓 강사 프로필</article>
              <aside>
                <label>이름</label>김가정
              </aside>
              <aside>
                <label>전공</label>실용음악과
              </aside>
              <aside>
                <label>대학교</label>경기대학교
              </aside>
              <aside>
                <label>평점</label>⭐ 5점
              </aside>
            </div>
            <div className={styles.classInfo}>
              <aside>
                <label>카테고리</label>
                {this.state.class.category}
              </aside>
              <aside>
                <label>기간</label>
                {this.state.class.startDate} ~ {this.state.class.endDate}
              </aside>
              <aside>
                <label>시간</label>
                {this.state.class.startTime} ~ {this.state.class.endTime}
              </aside>
              <aside>
                <label>장소</label>
                {this.state.class.place}
              </aside>
              <aside>
                <label>수강생</label>수강신청한 학생 /{' '}
                {this.state.class.numberOfStudents}
              </aside>
            </div>
          </section>
          <section className={styles.detailInfo}>
            {this.state.class.descriptions}
          </section>
        </div>
      </>
    )
  }
}

export default ClassInfo
