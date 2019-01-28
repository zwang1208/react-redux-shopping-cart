import React from 'react';
import PropTypes from 'prop-types';
import styles from '../css/product.css'


const ProductsList = ({children}) => (
    <div className='container'>{children}</div>
)

ProductsList.propTypes = {
  children: PropTypes.node,
}

export default ProductsList
