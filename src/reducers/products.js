import productActions from '../actions/products';

export default (state = [], action) => {
  switch (action.type) {
    case productActions.GET:
      return [];
    case productActions.SET:
      return action.payload.products;
    default:
      return state;
  }
};
