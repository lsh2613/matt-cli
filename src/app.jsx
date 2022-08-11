import styles from './app.module.css'
import Login from './componets/login/login';
import Signup from './componets/signup/signup';
import Home from './componets/home/home';
import { Routes, Route } from 'react-router';

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
      </Routes>
    </div>
  );
}

export default App;
