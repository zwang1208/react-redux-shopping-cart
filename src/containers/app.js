import React from 'react'
import ProductsListContainer from './products_list_container'
import CartContainer from './cart_container'
import styles from '../css/app.module.css'

const App = () => (
  <div>
    <div className={styles.appTitle}>
        <span>Fruit</span>
    </div>
    <div className={styles.appContainer}>
      <div className={styles.rowc}>
        <ProductsListContainer className={styles.appItem} />
        <CartContainer className={styles.appItem} />
      </div>
    </div>
  </div>
)

export default App
