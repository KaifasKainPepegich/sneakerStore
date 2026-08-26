import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <a className={styles.logo} href='/'>
        ПАДОШВА
      </a>

      <nav className={styles.navigation} aria-label='Основная навигация'>
        <a href='#catalog'>Каталог</a>
        <a href='#new'>Новинки</a>
        <a href='#sale'>Скидки</a>
      </nav>

      <button className={styles.cart} type='button'>
        Корзина
        <span className={styles.cartCount}>0</span>
      </button>
    </header>
  )
}

export default Header
