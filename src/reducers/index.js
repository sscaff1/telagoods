import { combineReducers } from 'redux';

export default combineReducers({
  products: (state = []) => state,
  cart: (state = {}) => state,
  loading: (state = false) => state,
});
