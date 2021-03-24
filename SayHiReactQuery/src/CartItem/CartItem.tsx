import Button from '@material-ui/core/Button';
import { Wrapper } from './CartItem.style';

import { CartItemType } from '../Types/CartItemType';
type Props = {
  item: CartItemType;
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};
const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => {
  return (
    <Wrapper>
      <div>
        <h3>{item.title}</h3>
        <div className="information">
          <p>Price: {item.price}₺ </p>
          <p>Total: {(item.amount * item.price).toFixed(2)}₺</p>
        </div>
        <div className="buttons">
          <Button

          color="secondary"
            size="small"
            disableElevation
            variant="contained"
            onClick={() => removeFromCart(item.id)}
          >
            -
          </Button>
          <p>{item.amount}</p>
          <Button
           color="primary"
            disableElevation
            variant="contained"
            onClick={() => addToCart(item)}
          >
            <p>+</p>
          </Button>
        </div>
      </div>
      <img src={item.image.replace('fakestoreapi','fakestoreapi.herokuapp')} alt={item.title} />
    </Wrapper>
  );
};

export default CartItem;
