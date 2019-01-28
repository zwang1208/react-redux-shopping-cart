import React from 'react';
import PropTypes from 'prop-types';
import styles from '../css/cart.module.css'

const Cart = ({price, quantity, imgSrc, onRemove, onDelete, onAdd}) => (
      <div>
        <div>
          <img style={{width: 100}} src={imgSrc} alt=''/>
          <button
            onClick={onDelete}
            className={styles.adjustBtn}
          >-</button>
          {quantity}
          <button
            onClick={onAdd}
            className={styles.adjustBtn}
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
  onRemove: PropTypes.func
}

export default Cart