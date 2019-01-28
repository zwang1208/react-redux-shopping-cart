import React from 'react'
import ProductsListContainer from './products_list_container'
import CartContainer from './cart_container'
import '../css/app.css'

const App = () => (
  <div>
    <div className='appTitle'>
        <span>Fruit</span>
    </div>
    <div className='appContainer'>
      <div className='rowc'>
        <ProductsListContainer />
        <CartContainer />
      </div>
    </div>
  </div>
)

export default App
