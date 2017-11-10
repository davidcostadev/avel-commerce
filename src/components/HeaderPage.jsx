import React from 'react';
import styles from '../assets/scss/App.scss';

import SearchForm from './SearchForm';
import NavBar from './Navbar';

const HeaderPage = () => (
  <div id={styles.headerPageOne}>
    <header className={`navbar-top ${styles.navbarSpaced} ${styles.navbarInverse}`}>
      <div className={`container ${styles.container}`}>
        <div className="row align-items-center">
          <div className={`col col-md-4 ${styles.brand}`}>
            <a href="/" className="brand-link">
              <img className={styles.logoDesktop} src="/img/logo-atacadoribeirao.svg" alt="Atacado Ribeirão" />
              <img className={styles.logoMobile} src="/img/logo-atacadoribeirao-white.svg" alt="Atacado Ribeirão" />
            </a>
          </div>
          <div className={`col ${styles.colSearch}`}>
            <SearchForm />
          </div>
          <div className={`col col-md-8 col-lg-3 ${styles.menu} ${styles.menuRight}`}>
            <div className={`${styles.menuItem} ${styles.onlyDesktop}`}>
              <a className={styles.menuLink} href="#">Meus Pedidos</a>
            </div>
            <div className={`${styles.menuItem} ${styles.onlyMobile}`}>
              <button className={styles.menuButton}>
                <i className="ion-ios-search" />
              </button>
            </div>
            <div className={`${styles.menuItem} ${styles.cartItem}`}>
              <a className={styles.menuLink} href="#">
                <i className="ion-ios-cart-outline" /> <span className={`badge ${styles.badge}`}>1</span>
              </a>
            </div>
            <div className={`${styles.menuItem} ${styles.onlyMobile}`}>
              <button className={styles.menuLink}><i className="ion-navicon" /></button>
            </div>
          </div>
        </div>
      </div>
    </header>
    <NavBar />
  </div>
);

export default HeaderPage;
