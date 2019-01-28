import React from 'react';
import PropTypes from 'prop-types';
import styles from '../css/product.module.css'


const ProductsList = ({children}) => (
    <div className={styles.container}>{children}</div>
)

ProductsList.propTypes = {
  children: PropTypes.node,
}

export default ProductsList
