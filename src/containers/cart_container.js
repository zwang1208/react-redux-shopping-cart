import React, { Component} from 'react'
import PropTypes from 'prop-types'
import Cart from '../components/cart'
import { connect } from 'react-redux'
import { deleteOne, addOne, checkout, removeFromCart } from '../actions/cart_action';
import { updateProductListAdd, updateProductListDecrease, updateProductListDelete } from '../actions/products_action'
import styles from '../css/cart.module.css'

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
    removeFromCart: PropTypes.func.isRequired,
    checkout: PropTypes.func.isRequired,
    addOne: PropTypes.func.isRequired,
    deleteOne: PropTypes.func.isRequired,
    updateProductListAdd: PropTypes.func.isRequired, 
    updateProductListDecrease: PropTypes.func.isRequired, 
    updateProductListDelete: PropTypes.func.isRequired 
  }

  render(){

    const { 
      products, 
      total, 
      checkout, 
      itemNumber, 
      removeFromCart, 
      deleteOne, 
      addOne, 
      updateProductListAdd, 
      updateProductListDecrease, 
      updateProductListDelete} = this.props;

    const hasProducts = products.length > 0;
    console.log(products)
    return(
      <div className={styles.cartContainer}>
        <div className={styles.title}>Shopping Cart</div>
        <div className={styles.itemAmount}>{`${itemNumber} items`}</div>
        <div>{hasProducts? (products.map(product=>
          <div className={styles.cartList} key = {product.id}>
            <Cart 
              price = {product.price}
              quantity = {product.quantity}
              imgSrc = {product.imgSrc}
              quantityRemaining = {product.quantityRemaining}
              onRemove = {() => {
                removeFromCart(product.id)
                updateProductListDelete(product.id, product.quantity)}}
              onDelete = {() => {
                deleteOne(product.id)
                updateProductListDecrease(product.id)}}
              onAdd = {() => {
                addOne(product.id)
                updateProductListAdd(product.id)}}
            />
          </div>
        )) : (
          <em>Please add some fruits to cart.</em>
        )}</div>
        <div className={styles.cartBottom}>
          <hr align="right" />
          <div className={styles.total}>
            Total: &#36;{total}
          </div>
          <div className={styles.emptyCart}>
            <button onClick = {() => checkout()}>Empty Cart</button>
          </div>
          <button
            className={styles.checkoutBtn}
            onClick = {() => checkout()}
            disabled={hasProducts ? '' : 'disabled'}>
            Confirm Purchase
          </button>
        </div>
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
  deleteOne, 
  addOne,
  updateProductListAdd,
  updateProductListDecrease,
  updateProductListDelete
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartContainer)
