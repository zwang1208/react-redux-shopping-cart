import * as types from '../constants/action_types';

const initialState = {
  addedIds: [],
  quantityById: {}
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

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TO_CART:
      return {...state, 
        addedIds: addProduct(state.addedIds, action.productId),
        quantityById: addQuantity(state.quantityById, action.productId)
      }
    case types.REMOVE_FROM_CART:
      return {...state,
        addedIds: state.addedIds.filter(productId => action.productId !== productId),
        quantityById: Object.keys(state.quantityById).reduce((acc, curr) => {
          if (curr !== action.productId) acc[curr] = state.quantityById[curr];
          return acc;
        }, {})
      }
    case types.CHECKOUT:
      return initialState
    default:
      return state
  }
}

export default cartReducer
