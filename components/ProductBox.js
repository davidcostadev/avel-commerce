import React from 'react'
import PropTypes from 'prop-types'
import { Link } from '../routes'
import * as Product from '../layout/Product'
import { StringToReal } from '../utils/money'
import SquareBox from './SquareBox'
import { parcelado } from './ParceladoBox'
import ShowPrice from './permissions/ShowPrice'

export const ProductBox = ({ product, columns }) => (
  <Product.ProductItem columns={columns}>
    <SquareBox image={product.PS_PATH_IMAGEM_250} />
    <Product.ProductTitle>{product.PS_PRODUTO}</Product.ProductTitle>
    <ShowPrice>
      <Product.ProductPrice>
        <Product.ProductCurrency>R$</Product.ProductCurrency>
        <Product.ProductAmount>{StringToReal(product.PS_VALOR_DE_VENDA)}</Product.ProductAmount>
      </Product.ProductPrice>
      {parcelado(product.PS_VL_VENDA_CCCREDITO3X)}
    </ShowPrice>
    <Product.ProductButtons>
      <Link route={`/product/${product.PS_PATH_PAGE}`}>
        <Product.ProductBtnDetails>Ver Detalhes</Product.ProductBtnDetails>
      </Link>
      {
        process.env.BUSSNESS_ENABLE_CART === 'true' ? (
          <Link route="/product">
            <Product.ProductBtnBuy>Comprar</Product.ProductBtnBuy>
          </Link>
        ) : ''
      }
    </Product.ProductButtons>
  </Product.ProductItem >
)


ProductBox.propTypes = {
  product: PropTypes.object.isRequired,
}

export default ProductBox
