import React from 'react';
import { useSelector } from 'react-redux';
import productActions from '../src/actions/products';

const Home = () => {
  const products = useSelector(state => state.products);
  console.log(products);
  return <h1>Hello World</h1>;
};

Home.getInitialProps = async ({ req, reduxStore }) => {
  if (req) {
    await reduxStore.dispatch(productActions.get());
  }
  return {};
};

export default Home;
