import styles from './App.module.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'

function App() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.content}>
        <Hero />
      </main>
    </div>
  )
}

export default App
