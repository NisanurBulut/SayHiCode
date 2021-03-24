import CartItem from '../CartItem/CartItem';

import { Wrapper } from './Cart.style';

import { CartItemType } from '../Types/CartItemType';

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  const calculateTotal=(items:CartItemType[])=>{
    return items.reduce((ack:number,item)=> ack+item.amount*item.price,0)
  }
  return (
    <Wrapper>
      <h2 style={{textAlign:'center'}}>Shopping Cart</h2>
      {cartItems.length === 0 ? <p>No items in cart</p> : null}
      {cartItems.map((item) => {
        return (
          <CartItem
            key={item.id}
            item={item}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        );
      })}
      <h2>Total: {calculateTotal(cartItems).toFixed(2)} ₺</h2>
    </Wrapper>
  );
};

export default Cart;
