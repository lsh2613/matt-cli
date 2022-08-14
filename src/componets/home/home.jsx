import React from 'react';
import styles from './home.module.css'
import Search from './components/search';
import RecommClass from './components/recommClass';
const Home = (props) => {
  return (
    <div className={styles.container}>
      <Search />
      <RecommClass />
    </div>
  )
}
export default Home;