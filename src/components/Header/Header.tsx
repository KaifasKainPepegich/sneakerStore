import { Link, NavLink } from 'react-router-dom';
import styles from './styles.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link className={styles.storeLogo} to='/'>
        ПАДОШВА
      </Link>

      <nav className={styles.catalogNavigation} aria-label='Основная навигация'>
        <NavLink to='#catalog'>Каталог</NavLink>
        <NavLink to='#new'>Новинки</NavLink>
        <NavLink to='#sale'>Скидки</NavLink>
      </nav>

      <button className={styles.cartLink} type='button'>
        Корзина
        <span className={styles.cartItemCount}>0</span>
      </button>
    </header>
  );
};
