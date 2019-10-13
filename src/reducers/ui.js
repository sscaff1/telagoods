import productActions from '../actions/products';
import uiActions from '../actions/ui';

export default (state = {}, action) => {
  switch (action.type) {
    case uiActions.TOGGLE_CART:
      return {
        ...state,
        menuShown: false,
        cartShown: !state.cartShown,
      };
    case uiActions.TOGGLE_MENU:
      return {
        ...state,
        cartShown: false,
        menuShown: !state.menuShown,
      };
    case productActions.GET:
      return {
        ...state,
        loading: true,
      };
    case productActions.SET:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
