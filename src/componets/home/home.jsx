import React from 'react'
import styles from './home.module.css'
import Search from './components/search'
import RecommClass from './components/recommClass'
const Home = (props) => {
  return (
    <div className={styles.container}>
      <RecommClass />
      <Search />
    </div>
  )
}
export default Home
