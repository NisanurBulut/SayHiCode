import { useState } from 'react';
import { useQuery } from 'react-query';
// components
import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';
// styles
import { Wrapper } from './App.style';
// Types
import { CartItemType } from './Types/CartItemType';

const getProducts = async (): Promise<CartItemType[]> =>
 await((await fetch('https://fakestoreapi.com/products')).json());

const App = () => {
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    'products',
    getProducts
  );
  const getTotalItems = () => null;
  const handleAddToCart = () => null;
  const handleRemoveFromCart = () => null;

  console.log(data);
  return <div className="App">App</div>;
};

export default App;
