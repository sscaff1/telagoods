const uiActions = {
  TOGGLE_MENU: 'TOGGLE_MENU',
  TOGGLE_CART: 'TOGGLE_CART',

  toggleCart: () => ({ type: uiActions.TOGGLE_CART }),
  toggleMenu: () => ({ type: uiActions.TOGGLE_MENU }),
};

export default uiActions;
