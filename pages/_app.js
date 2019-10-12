import App from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import withReduxStore from '../src/lib/with-redux-store';
import Layout from '../src/components/Layout';

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Provider store={reduxStore}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    );
  }
}

export default withReduxStore(MyApp);
