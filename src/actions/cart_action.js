import * as types from '../constants/action_types';
import _products from '../api/store_items.json'

// cart action creater
export const checkout = () => {
  let products = _products.map((v, i) => (
    {'id' : i, ...v}
  ))
  return ({
    type: types.CHECKOUT,
    products
  })
}

export const removeFromCart = productId => {
  return ({
    type: types.REMOVE_FROM_CART,
    productId
  })
}

export const addOne = (productId) => {
  return ({
    type: types.ADD_ONE_ITEM,
    productId
  })
}

export const deleteOne = (productId) => {
  return ({
    type: types.DECREASE_ONE_ITEM,
    productId
  })
}