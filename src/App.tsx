import styles from './App.module.css'
import Header from './components/Header/Header'

function App() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.content}>
        <h1>ПАДОШВА</h1>
        <p>Магазин кроссовок</p>
      </main>
    </div>
  )
}

export default App
