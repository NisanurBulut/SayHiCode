import Button from '@material-ui/core/Button';
import React from 'react';
// types
import { CartItemType } from '../Types/CartItemType';
// styles
import { Wrapper } from './Item.style';

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};

const Item: React.FC<Props>=({item, handleAddToCart})=>(
    <Wrapper>
        <img src={item.image.replace('fakestoreapi','fakestoreapi.herokuapp')} alt={item.title} />
        <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <h3>{item.price} TL</h3>
        </div>
       <Button onClick={()=>handleAddToCart(item)}>Add To Cart</Button>
    </Wrapper>
)

export default Item;