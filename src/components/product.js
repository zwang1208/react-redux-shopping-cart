import React from 'react';
import PropTypes from 'prop-types';
import styles from '../css/product.module.css'
import Image from '../containers/img'
import errorImg from '../static/404.jpg'

const Product = ({price, num, title, imgSrc}) => (
  <div>
    <div className={styles.imgDiv}>
    <Image 
      className={styles.fruitImg}
      src={imgSrc}
      fallbackSrc= {errorImg}
    />
    </div>
    <div className={styles.fruitName}>{title}</div>
    <div>
      <span style={{fontSize: 40}}>&#36;{price}</span>
      <span style={{fontSize: 20}}>{num ? ` ${num} In Stock` : null}</span>
    </div>
  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  num: PropTypes.number,
  title: PropTypes.string
}

export default Product
