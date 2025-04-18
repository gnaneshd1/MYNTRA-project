// src/reducers/wishlistReducer.js
const initialState = [];

function wishlistReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TO_WISHLIST':
      return [...state, action.payload];
    default:
      return state;
  }
}

export default wishlistReducer;
