import styles from './Hero.module.css'
import heroSneaker from '../../assets/images/hero-sneaker.webp'

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.copy}>
        <p className={styles.eyebrow}>Новая коллекция</p>
        <h1 className={styles.title}>Бархатные тяги</h1>
        <p className={styles.description}>с Коралловыми акцентами</p>
        <a className={styles.button} href='#catalog'>
          Каталог
        </a>
      </div>
      <div className={styles.visual}>
        <img
          className={styles.image}
          src={heroSneaker}
          alt='Бело-чёрный кроссовок с коралловыми вставками'
        />
      </div>
    </section>
  )
}

export default Hero
