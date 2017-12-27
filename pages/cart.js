import React from 'react'
import withRedux from 'next-redux-wrapper'
import { bindActionCreators } from 'redux'
import { initStore } from '../store'
import { getCart, changeQuant } from '../api/Cart'
import { setCart, setCartItens } from '../flux/cart/cartActions'
import Page from '../containers/PageHOF'
import ContentCart from '../components/ContentCart'
import { Container } from '../layout/Pages'

class Cart extends React.Component {
  static async getInitialProps({ req, store, isServer }) {
    const { sessionId } = await Page.getInitialProps(store, req, isServer)

    const cartId = Page.getCartId(store, req, isServer)
    const { cart, cartItens } = await Cart.getCart(store, cartId, sessionId)

    const urlMeta = {
      PS_TITLE: 'Carrinho',
      PS_DESCRIPTION: 'Carrinho de Compra',
    }

    return {
      cartId,
      sessionId,
      urlMeta,
      cart,
      cartItens,
      setCart,
      setCartItens,
    }
  }

  static async getCart(store, cartId, sessionId) {
    console.log('getCart')
    const state = store.getState()

    if (state.cartItens.length) {
      return {
        cart: state.cart,
        cartItens: state.cartItens,
      }
    }


    const { cart, cartItens } = await getCart({
      cartId,
      sessionId,
    })

    store.dispatch(setCart(cart))
    store.dispatch(setCartItens(cartItens))

    return {
      cart,
      cartItens,
    }
  }

  async changeQuant(movimentCartId, productId, quant) {
    console.log('changeQuant', movimentCartId, productId)
    console.log(this)

    const { cart, cartItens } = await changeQuant({
      cartId: this.props.cartId,
      sessionId: this.props.sessionId,
      movimentCartId,
      productId,
      quant,
    })

    console.log(cart, cartItens)

    this.props.setCart(cart)
    this.props.setCartItens(cartItens)
  }

  render() {
    return (
      <Page {...this.props}>
        <Container>
          <ContentCart
            cart={this.props.cart}
            cartItens={this.props.cartItens}
            changeQuant={this.changeQuant.bind(this)}
          />
        </Container>
      </Page>
    )
  }
}


const mapState = state => state


const mapDispatchToProps = dispatch => ({
  setCart: bindActionCreators(setCart, dispatch),
  setCartItens: bindActionCreators(setCartItens, dispatch),
})


export default withRedux(initStore, mapState, mapDispatchToProps)(Cart)
