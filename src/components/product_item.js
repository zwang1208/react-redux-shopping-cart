import React from 'react';
import PropTypes from 'prop-types';
import Product from './product';
import styles from '../css/product.css'

const ProductItem = ({product, onAddToCartClicked}) => (
  <div className='itemContainer'>
    <Product
      title={product.itemName}
      price={product.price}
      num={product.quantityRemaining}
      imgSrc={product.imgSrc}
      />
    <button
      className='addButton'
      onClick={onAddToCartClicked}
      disabled={product.quantityRemaining > 0 ? '' : 'disabled'}
      >
      {product.quantityRemaining > 0 ? 'Add to Cart' : 'Sold Out'}
    </button>
  </div>
)


ProductItem.propTypes = {
  product: PropTypes.shape({
    itemName: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantityRemaining: PropTypes.number.isRequired,
    imgSrc: PropTypes.string.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
}

export default ProductItem
