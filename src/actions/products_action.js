import * as types from '../constants/action_types';
import _products from '../api/store_items.json'

//product action creater

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

export const updateProductListAdd = productId => {   
  return ({
    type: types.ADD_ONE_ITEM_PRODUCT,
    productId
  })
}

export const updateProductListDecrease = productId => {
  return ({
    type: types.DECREASE_ONE_ITEM_PRODUCT,
    productId
  })
}

export const updateProductListDelete = (productId, quantity)  => {
  return ({
    type: types.AFTER_DELETE_PRODUCT,
    productId,
    quantity
  })
}

