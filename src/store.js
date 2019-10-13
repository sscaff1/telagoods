import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from './reducers';

const initialState = {
  products: [],
  cart: {},
  ui: {
    loading: false,
    cartShown: false,
    menuShown: false,
  },
};

export default (initState = initialState) => {
  return createStore(
    reducer,
    initState,
    composeWithDevTools(applyMiddleware(thunk))
  );
};
