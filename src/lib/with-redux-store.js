import React, { Component } from 'react';
import PropTypes from 'prop-types';
import initializeStore from '../store';

const isServer = typeof window === 'undefined';
const REDUX_STORE = '__NEXT_REDUX_STORE__';

function getOrCreateStore(initialState) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return initializeStore(initialState);
  }

  // Create store if unavailable on the client and set it on the window object
  if (!window[REDUX_STORE]) {
    window[REDUX_STORE] = initializeStore(initialState);
  }
  return window[REDUX_STORE];
}

export default App => {
  class AppWithRedux extends Component {
    static async getInitialProps(appContext) {
      // Get or Create the store with `undefined` as initialState
      // This allows you to set a custom default initialState
      const reduxStore = getOrCreateStore();

      // Provide the store to getInitialProps of pages
      // eslint-disable-next-line no-param-reassign
      appContext.ctx.reduxStore = reduxStore;

      let appProps = {};
      if (typeof App.getInitialProps === 'function') {
        appProps = await App.getInitialProps(appContext);
      }

      return {
        ...appProps,
        initialReduxState: reduxStore.getState(),
      };
    }

    constructor(props) {
      super(props);
      this.reduxStore = getOrCreateStore(props.initialReduxState);
    }

    render() {
      return <App {...this.props} reduxStore={this.reduxStore} />;
    }
  }

  AppWithRedux.propTypes = {
    initialReduxState: PropTypes.shape({}).isRequired,
  };

  return AppWithRedux;
};
