import styles from './styles.module.scss';

export const SneakerBanner = () => {
  return (
    <section className={styles.sneakerBanner}>
      <div className={styles.bannerText}>
        <p className={styles.collectionLabel}>Новая коллекция</p>
        <h1 className={styles.bannerTitle}>Бархатные тяги</h1>
        <p className={styles.sneakerDescription}>с Коралловыми акцентами</p>
        <a className={styles.catalogLink} href='#catalog'>
          Каталог
        </a>
      </div>
      <div className={styles.sneakerImageContainer}>
        <img
          className={styles.sneakerImage}
          src='/images/sneaker-banner.webp'
          alt='Бело-чёрный кроссовок с коралловыми вставками'
        />
      </div>
    </section>
  );
};
