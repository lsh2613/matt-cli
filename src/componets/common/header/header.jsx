import React, { useEffect } from 'react'
import styles from './header.module.css'
import button from '../../../common/button.module.css'
import { useNavigate } from 'react-router-dom'
import { log_out } from '../../../api/login/login'
import { useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { onChangeKeyword, onSearch } from '../../../redux/reducers/search'
import { initUser, fetchUser } from '../../../redux/reducers/user'

const Header = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useDispatch()

  const login = useSelector((state) => state.user.login)
  const keyword = useSelector((state) => state.search.searchKey)

  const onLogout = () => {
    log_out().then(localStorage.clear())
    dispatch(initUser())
    navigate('/')
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') toSearch()
  }

  /**
   * 검색어
   */

  const toSearch = () => {
    dispatch(onSearch())
    if (location.pathname !== '/search') navigate('/search')
  }
  const toMypage = () => {
    navigate('/mypage')
  }

  useEffect(() => {
    dispatch(fetchUser())
  })

  return (
    <header className={styles.header}>
      <img
        src={require('../../../utils/image/logo.png')}
        alt='logo'
        className={styles.logo}
        onClick={() => {
          navigate('/')
        }}
      />
      <div className={styles.menu}>
        <li className={styles.menuList} onClick={() => navigate('/class')}>
          강좌조회
        </li>
        <li className={styles.menuList} onClick={() => navigate('/instructor')}>
          멘토조회
        </li>
      </div>
      <div className={styles.searchForm}>
        <input
          placeholder='검색어를 입력하세요'
          onChange={(e) => {
            dispatch(onChangeKeyword(e.target.value))
          }}
          name={keyword}
          value={keyword}
          
          onKeyPress={handleKeyPress}
        />
        <button
          className={`${styles.fullPrimaryBtn} ${styles.searchBtn}`}
          onClick={toSearch}
        >
          검색
        </button>
      </div>
      {login ? (
        <div className={styles.floatRight}>
          <span className={styles.signUpBtn} onClick={toMypage}>
            마이페이지
          </span>
          <button className={button.fullPrimaryBtn} onClick={onLogout}>
            로그아웃
          </button>
        </div>
      ) : (
        <div className={styles.floatRight}>
          <span
            className={styles.signUpBtn}
            onClick={() => {
              navigate('/signup')
            }}
          >
            회원가입
          </span>
          <button
            className={button.borderPrimaryBtn}
            onClick={() => {
              navigate('/login')
            }}
          >
            로그인
          </button>
        </div>
      )}
    </header>
  )
}

export default Header
