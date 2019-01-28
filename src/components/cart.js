import React from 'react';
import PropTypes from 'prop-types';


const Cart = ({price, quantity, imgSrc, onRemove}) => (
      <div>
        <div>
          <img style={{width: 50}} src={imgSrc} alt=''/>
          <button>-</button>
          {quantity}
          <button
          >+</button>
        </div>
        <div>
          &#64;&#36;{`${price}each = `}&#36;{(price*quantity).toFixed(2)}
          <button
            className='remove'
            onClick = {onRemove}
          >Remove</button>
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