import React from 'react'
import PropTypes from 'prop-types'

import ProductBox from './ProductBox'
import styles from '../assets/scss/App.scss'

// console.log(styles);

const ProductsCarrocel = props => (
  <div className={styles.productsSection}>
    <h2 className={styles.productsSectionTitle}>{props.title}</h2>
    <div className={`${styles.productsSectionRow} ${styles.columns4} products`}>
      {props.products.map(product => (
        <ProductBox product={product} key={product.PS_ID_PRODUTO} />
      ))}
    </div>
  </div>
)

ProductsCarrocel.propTypes = {
  title: PropTypes.string.isRequired,
  products: PropTypes.array,
}

ProductsCarrocel.defaultProps = {
  products: [],
}

export default ProductsCarrocel