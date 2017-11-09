import React from 'react';
// import { Container, Header } from 'semantic-ui-react';
import Helmet from 'react-helmet';

import styles from '../assets/scss/App.scss';
// import TopMenu from '../components/TopMenu';
import ProductsCarrocel from '../components/ProductsCarrocel';
import BannerMosaico from '../components/BannerMosaico';

const Homepage = () => (
  <div className="page-home">
    <Helmet
      title="Inicio"
    />
    <BannerMosaico />
    <div className={`container ${styles.container}`}>
      <ProductsCarrocel title="Informática" />
    </div>
  </div>
);

export default Homepage;
