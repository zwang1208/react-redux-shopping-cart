import * as types from '../constants/action_types';

const initialState = {}

const decreaseInventory = (product) => {
  return {
    ...product,
    quantityRemaining: product.quantityRemaining - 1
  }
}

const increaseInventory = (product) => {
  return {
    ...product,
    quantityRemaining: product.quantityRemaining + 1
  }
}

const afterDelete =(product) => {
  return {
    ...product,
    quantityRemaining: product.quantityRemaining
  }
}

const productsReducer = (state = initialState, action) => {
  const { productId } = action
  switch (action.type) {
    case types.SHOW_INVENTORY:
      return {...action.products}
    case types.ADD_TO_CART:
      return {
        ...state,
        [productId]: decreaseInventory(state[productId])
      }
    case types.ADD_ONE_ITEM_PRODUCT:
      return {
        ...state,
        [productId]: decreaseInventory(state[productId])
      }
    case types.DECREASE_ONE_ITEM_PRODUCT:
      return {
        ...state,
        [productId]: increaseInventory(state[productId])
      }
    case types.AFTER_DELETE_PRODUCT:
      return {
        ...state,
        [productId]: afterDelete(state[productId])
      }
    case types.CHECKOUT:
      return {...action.products}
    default:
      return state
  }
}

export default productsReducer
