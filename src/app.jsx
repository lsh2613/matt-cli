import styles from './app.module.css'
import Login from './componets/login/login'
import Signup from './componets/signup/signup'
import MyPage from './componets/mypage/mypage'
import Home from './componets/home/home'
import MakeClass from './componets/instructor/class/makeclass'
import UpdateClass from './componets/instructor/class/updateclass'
import Waiting from './componets/instructor/class/wating'
import ClassInfoPage from './componets/class/classInfoPage'
import AuthInstructor from './componets/instructor/auth/authInstructor'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import SearchPage from './componets/search/searchPage'
import InstructorPage from './componets/instructor/instructorPage'
import StudentReview from './componets/mypage/components/studentReview'
import InstructorInfo from './componets/instructor/components/instructorInfo'
import { useSelector } from 'react-redux'
import ClassPage from './componets/class/classPage'
import { useEffect } from 'react'
import CommunityPage from './componets/community/communityPage'
import FindPw from './componets/home/components/findPw'

function App() {
  const login = useSelector((state) => state.user.login)

  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className={styles.app}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='findpw' element={<FindPw />} />
        <Route path='signup' element={<Signup />} />
        <Route path='/class' element={<ClassPage />} />
        <Route exact path='/class/:classId' element={<ClassInfoPage />} />
        <Route exact path='/instructor' element={<InstructorPage />} />
        <Route exact path='/instructor/:insId' element={<InstructorInfo />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='/community/*' element={<CommunityPage />} />
        {login ? (
          <>
            <Route path='mypage' element={<MyPage />} />
            <Route path='/makeclass' element={<MakeClass />} />
            <Route path='/updateclass/:classId' element={<UpdateClass />} />
            <Route exact path='/class/:classId/waiting' element={<Waiting />} />
            <Route
              exact
              path='/class/:classId/student'
              element={<StudentReview />}
            />
            <Route path='/instructor/auth' element={<AuthInstructor />} />
          </>
        ) : (
          <>
            <Route path='/mypage' element={<Navigate replace to='/login' />} />
            <Route
              path='/makeclass'
              element={<Navigate replace to='/login' />}
            />
            <Route
              path='/updateclass/:classId'
              element={<Navigate replace to='/login' />}
            />
            <Route
              exact
              path='/class/:classId/waiting'
              element={<Navigate replace to='/login' />}
            />
            <Route
              path='/instructor/auth'
              element={<Navigate replace to='/login' />}
            />
          </>
        )}
      </Routes>
    </div>
  )
}

export default App
