import React from 'react';
import PropTypes from 'prop-types';
import styles from '../css/product.css'

const Product = ({price, num, title, imgSrc}) => (
  <div>
    <div className='imgDiv'><img className='fruitImg' src={imgSrc} alt='The image link is broken.'/></div>
    <div className='fruitName'>{title}</div>
    <div>&#36;{price}{num ? ` ${num} in stock` : null}</div>
  </div>
)


Product.propTypes = {
  price: PropTypes.number,
  num: PropTypes.number,
  title: PropTypes.string
}

export default Product
