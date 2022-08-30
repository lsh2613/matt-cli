import styles from './app.module.css'
import Login from './componets/login/login'
import Signup from './componets/signup/signup'
import MyPage from './componets/mypage/mypage'
import Home from './componets/home/home'
import MakeClass from './componets/instructor/class/makeclass'
import Waiting from './componets/instructor/class/wating'
import ClassInfoPage from './componets/class/classInfoPage'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
        <Route path='mypage' element={<MyPage />} />
        <Route path='/makeclass' element={<MakeClass />} />
        <Route path='/classInfo/:classId' element={<ClassInfoPage />} />
        <Route path='/class/:classId/waiting' element={<ClassInfoPage />} />
      </Routes>
    </div>
  )
}

export default App
