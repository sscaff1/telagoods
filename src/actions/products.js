import api from '../lib/wooCommerce';

const productActions = {
  GET: 'PRODUCTS_GET',
  SET: 'PRODUCTS_SET',

  get: () => dispatch => {
    dispatch({ type: productActions.GET });
    return api
      .get('products')
      .then(response => dispatch(productActions.set(response.data)));
  },

  set: products => ({ type: productActions.SET, payload: { products } }),
};

export default productActions;
