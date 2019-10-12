import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from './reducers';

const initialState = {
  products: [],
  cart: {},
  loading: false,
};

export default (initState = initialState) => {
  return createStore(
    reducer,
    initState,
    composeWithDevTools(applyMiddleware(thunk))
  );
};
