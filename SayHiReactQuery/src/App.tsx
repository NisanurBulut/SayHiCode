import { useState } from 'react';
import { useQuery } from 'react-query';
// components
import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';
import Toolbar from '@material-ui/core/Toolbar';
import Item from './Item/Item';
// styles
import { Wrapper } from './App.style';
// Types
import { CartItemType } from './Types/CartItemType';
import AppToolBar from './AppToolBar/AppToolBar';

const getProducts = async (): Promise<CartItemType[]> => {
  return await (
    await fetch('https://fakestoreapi.herokuapp.com/products')
  ).json();
};

const getTotalItems = () => null;
const handleAddToCart = (clickedItem:CartItemType) => null;
const handleRemoveFromCart = () => null;
const App = () => {
  const [cartOpen, setCartOpen]=useState(false);
  const[cartItems,setCartItems]=useState([] as CartItemType[])
;  const { isLoading, error, data } = useQuery<CartItemType[]>(
    'products',
    getProducts
  );
  if (isLoading) return <LinearProgress color="primary"  />;
  if (error) return <p>Error {error}</p>;

  return (
    <Wrapper>
      <AppToolBar />
      <Grid style={{"padding":"0.5rem"}} container spacing={4}>
        {data?.map((item=> (
          <Grid item key={item.id} xs={3} md={4} sm={3}>
           <Item item={item} handleAddToCart={handleAddToCart} />
            </Grid>
        )))}
      </Grid>
    </Wrapper>
  )
};

export default App;
