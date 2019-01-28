import * as types from '../constants/action_types';
import _products from '../api/store_items.json'

export const showInventory = () => {
  let products = _products.map((v, i) => (
    {'id' : i, ...v}
  ))
  return {
    type: types.SHOW_INVENTORY,
    products
  }
}

export const addToCart = productId => {
  return ({
    type: types.ADD_TO_CART,
    productId
  })
}
