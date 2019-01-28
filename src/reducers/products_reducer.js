import * as types from '../constants/action_types';

const initialState = {}

const decreaseInventory = (product) => {
  return {
    ...product,
    quantityRemaining: product.quantityRemaining - 1
  }
}

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SHOW_INVENTORY:
      return {...action.products}
    case types.ADD_TO_CART:
      const { productId } = action
      return {
        ...state,
        [productId]: decreaseInventory(state[productId])
      }
    case types.CHECKOUT:
      return {...action.products}
    default:
      return state
  }
}

export default productsReducer
