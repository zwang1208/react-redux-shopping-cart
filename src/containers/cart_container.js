import React, { Component} from 'react'
import PropTypes from 'prop-types'
import Cart from '../components/cart'
import { connect } from 'react-redux'
import { checkout, removeFromCart } from '../actions/cart_action';
import { addToCart } from '../actions/products_action'
import '../css/cart.css'

class CartContainer extends Component {

  static propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      itemName: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantityRemaining: PropTypes.number.isRequired,
      imgSrc: PropTypes.string.isRequired
    })).isRequired,
    total: PropTypes.string,
    removeFromCart: PropTypes.func.isRequired
  }

  render(){

    const { products, total, checkout, itemNumber, removeFromCart} = this.props;
    const hasProducts = products.length > 0;
    console.log(products)
    return(
      <div className='cartContainer'>
        <div className='title'>Shopping Cart</div>
        <div className='itemAmount'>{`${itemNumber} items`}</div>
        <div>{hasProducts? (products.map(product=>
          <div className='cartList' key = {product.id}>
            <Cart 
              price = {product.price}
              quantity = {product.quantity}
              imgSrc = {product.imgSrc}
              onRemove = {() => removeFromCart(product.id)}
            />
          </div>
        )) : (
          <em>Please add some products to cart.</em>
        )}</div>
        <p className='total'>Total: &#36;{total}</p>
        <button
          onClick = {() => checkout()}
          disabled={hasProducts ? '' : 'disabled'}>
          Checkout
        </button>
      </div>
    )

  }
}

const productsInCart = (state) => {
  const { products, cart } = state;
  let result = [];
  let total = 0;
  let itemNumber = 0;
  for(let id in cart.quantityById){
    result.push({
      ...products[id],
      quantity:cart.quantityById[id]
    });
    total += products[id].price * cart.quantityById[id]
    itemNumber += cart.quantityById[id]
  }

  return {
    products: result,
    total: total.toFixed(2),
    itemNumber: itemNumber
  }
}

const mapStateToProps = (state) => productsInCart(state)
const mapDispatchToProps = {
  checkout,
  removeFromCart,
  addToCart
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartContainer)
