import styles from './app.module.css'
import Login from './componets/login/login';
import { Routes, Route } from 'react-router';

function App() {
  return (
    <div className={styles.app}>
      <Routes path="login">
        <Route path="login"
          element={<Login />}
        />
      </Routes>
    </div>
  );
}

export default App;
