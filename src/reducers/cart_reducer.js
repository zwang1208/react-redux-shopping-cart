import * as types from '../constants/action_types';

const initialState = {
  addedIds: [],
  quantityById: {},
  exceedStock: false
}

const addProduct = (state = initialState.addedIds, productId) => {
  if(state.indexOf(productId) === -1){
    return [...state, productId]
  }
  return state
}

const addQuantity = (state = initialState.quantityById, productId) => {
  return {
    ...state,
    [productId]: (state[productId] || 0) + 1
  }
}

const decreaseQuantity = (state = initialState.quantityById, productId) => {
  if (state[productId] === 0) {
    delete state[productId];
    return state;
  } 
  return {
    ...state,
    [productId]: state[productId] - 1
  }
};

const removeItem = (state = initialState.quantityById, productId) => {
  delete state[productId];
  return state;
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TO_CART:
      return {...state, 
        addedIds: addProduct(state.addedIds, action.productId),
        quantityById: addQuantity(state.quantityById, action.productId)
      }
    case types.ADD_ONE_ITEM:
      return {
        ...state,
        quantityById: addQuantity(state.quantityById, action.productId)
      }
    case types.DECREASE_ONE_ITEM:
      return {
        ...state,
        quantityById: decreaseQuantity(state.quantityById, action.productId)
      }
    case types.REMOVE_FROM_CART:
      return {...state,
        quantityById: removeItem(state.quantityById, action.productId)
      }
    case types.CHECKOUT:
      return initialState
    default:
      return state
  }
}

export default cartReducer
