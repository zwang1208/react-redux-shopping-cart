import React from 'react';
import PropTypes from 'prop-types';
import styles from '../css/cart.module.css'
import Image from '../containers/img'
import errorImg from '../static/404.jpg'

const Cart = ({price, quantity, imgSrc, onRemove, onDelete, onAdd, quantityRemaining}) => (
      <div>
        <div>
          <Image 
            style={{width: 100}}
            src={imgSrc}
            fallbackSrc= {errorImg}
          />
          <button
            onClick={onDelete}
            className={styles.adjustBtn}
          >-</button>
          {quantity}
          <button
            onClick={onAdd}
            className={styles.adjustBtn}
            disabled={quantityRemaining===0? 'disabled': ''}
          >+</button>
        </div>
        <div>
          &#64;&#36;{`${price}each = `}&#36;{(price*quantity).toFixed(2)}
          <button
            className={styles.remove}
            onClick = {onRemove}
          >Delete</button>
        </div>
      </div>
)

Cart.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  imgSrc: PropTypes.string,
  onRemove: PropTypes.func,
  onDelete: PropTypes.func,
  onAdd: PropTypes.func,
}

export default Cart