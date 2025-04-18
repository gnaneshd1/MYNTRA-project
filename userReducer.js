// src/reducers/userReducer.js
const initialState = { name: '', email: '' };

function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export default userReducer;
