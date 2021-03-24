import Button from '@material-ui/core/Button';

import { CartItemType } from '../Types/CartItemType';
type Props = {
  item: CartItemType;
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};
const CartItem: React.FC<Props> = () => <div>CartItem</div>;

export default CartItem;
