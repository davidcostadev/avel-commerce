import React from 'react';
import styles from '../assets/scss/App.scss';

const BannerSeparate = () => (
  <div className={styles.bannerSeparateGrid}>
    <div className={styles.bannerSeparateCol}>
      <div className={styles.bannerSeparateRow}>
        <div className={`${styles.bannerSeparate} ${styles.bannerSeparateRight}`} style={{ backgroundImage: 'url(\'/img/camera.jpg\')' }}>
          <span className={styles.bannerText1}>Limpador de Tela</span>
          <span className={styles.bannerText2}>R$ 17,90</span>
          <a href="/product" className={styles.bannerBtn}>Ver Detalhes</a>
        </div>
      </div>
    </div>
    <div className={styles.bannerSeparateCol}>
      <div className={styles.bannerSeparateRow}>
        <div className={`${styles.bannerSeparate} ${styles.bannerSeparateRight}`} style={{ backgroundImage: 'url(\'/img/mouse.jpg\')' }}>
          <span className={styles.bannerText1}>Mouse Mac</span>
          <span className={styles.bannerText2}>R$ 227,90</span>
          <a href="/product" className={styles.bannerBtn}>Ver Detalhes</a>
        </div>
      </div>
    </div>
  </div>
);

export default BannerSeparate;
