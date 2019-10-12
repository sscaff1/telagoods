import React from 'react';
import PropTypes from 'prop-types';
import { Pane, Heading, Icon } from 'evergreen-ui';

const Layout = ({ children }) => {
  return (
    <>
      <Pane
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        background="tint1"
        paddingX={28}
        paddingY={16}
      >
        <Pane>
          <Icon icon="menu" />
          Menu
        </Pane>
        <Heading size={700}>Tela Goods</Heading>
        <Pane>
          Cart
          <Icon icon="shopping-cart" />
        </Pane>
      </Pane>
      {children}
      <Pane flex={1} alignItems="center" display="flex" background="tint2">
        <Heading size={400}>Footer</Heading>
      </Pane>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
