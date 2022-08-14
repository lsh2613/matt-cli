import React from 'react';
import styles from './search.module.css';

const Search = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.filterDiv}>
        <div className={styles.filterTitle}>태그별</div>
        <div className={styles.filterGroup}>
          <li className={styles.item}>연애</li>
          <li className={styles.item}>게임</li>
          <li className={styles.item}>코딩</li>
          <li className={styles.item}>음악</li>
          <li className={styles.item}>축구</li>
        </div>
      </div>

      <div className={styles.filterDiv}>
        <div className={styles.filterTitle}>요일별</div>
        <div className={styles.filterGroup}>
          <li className={styles.item}>월</li>
          <li className={styles.item}>화</li>
          <li className={styles.item}>수</li>
          <li className={styles.item}>목</li>
          <li className={styles.item}>금</li>
        </div>
      </div>

      <div className={styles.filterDiv}>
        <div className={styles.filterTitle}>장소</div>
        <div className={styles.filterGroup}>
          <li className={styles.item}>서울</li>
          <li className={styles.item}>부산</li>
          <li className={styles.item}>인천</li>
          <li className={styles.item}>경기</li>
          <li className={styles.item}>전라도</li>
        </div>
      </div>

    </div>

  )
}

export default Search;