import styles from './app.module.css'
import Login from './componets/login/login';
import Signup from './componets/signup/signup';
import MyPage from './componets/mypage/mypage';
import Home from './componets/home/home';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className={styles.app}>

      <Routes>
        <Route path="/"
          element={<Home />}
        />
        <Route path="login"
          element={<Login />}
        />
        <Route path="signup"
          element={<Signup />}
        />
        <Route path="mypage"
          element={<MyPage />}
        />
      </Routes>

    </div>
  );
}

export default App;
