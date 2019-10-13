import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Pane, Heading, Icon, SideSheet, Position } from 'evergreen-ui';
import { useDispatch, useSelector } from 'react-redux';
import uiActions from '../actions/ui';

const Layout = ({ children }) => {
  const { cartShown, menuShown } = useSelector(state => state.ui);
  const dispatch = useDispatch();
  const toggleMenu = useCallback(() => {
    dispatch(uiActions.toggleMenu());
  }, [dispatch]);
  const toggleCart = useCallback(() => {
    dispatch(uiActions.toggleCart());
  }, [dispatch]);
  return (
    <>
      <Pane background="tint2" paddingX={28} paddingY={16} elevation={2}>
        <Pane
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          marginX="auto"
          maxWidth={1200}
        >
          <Pane display="flex" alignItems="center" onClick={toggleMenu}>
            <Icon icon="menu" />
            <Heading size={600} paddingLeft={15}>
              Menu
            </Heading>
          </Pane>
          <Heading size={900}>Tela Goods</Heading>
          <Pane display="flex" alignItems="center" onClick={toggleCart}>
            <Heading size={600} paddingRight={15}>
              Cart
            </Heading>
            <Icon icon="shopping-cart" />
          </Pane>
        </Pane>
      </Pane>
      <Pane marginX="auto" maxWidth={1200} paddingY={50} paddingX={28}>
        {children}
      </Pane>
      <Pane
        background="tint2"
        paddingX={28}
        paddingY={16}
        elevation={2}
        position="fixed"
        width="100%"
        bottom={0}
      >
        <Pane
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          marginX="auto"
          maxWidth={1200}
          flex={1}
        >
          <Heading size={400}>Footer</Heading>
        </Pane>
      </Pane>
      <SideSheet isShown={cartShown} onCloseComplete={toggleCart}>
        <Heading>Cart</Heading>
      </SideSheet>
      <SideSheet
        position={Position.LEFT}
        isShown={menuShown}
        onCloseComplete={toggleMenu}
      >
        <Heading>Menu</Heading>
      </SideSheet>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
