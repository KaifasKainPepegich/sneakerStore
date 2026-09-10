import { Routes, Route } from 'react-router-dom';
import styles from './App.module.scss';
import { Header } from './components/Header/Header';
import { HomePage } from './pages/HomePage/HomePage';

export const App = () => {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.content}>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </main>
    </div>
  );
};
