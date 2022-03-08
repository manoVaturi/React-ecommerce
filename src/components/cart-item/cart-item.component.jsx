import React from 'react';

import {
  CartITemContainer,
  ItemDetailsContainer,
  ImageContainer,
} from './cart-item.styles.jsx';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartITemContainer>
    <ImageContainer src={imageUrl} alt='item'></ImageContainer>
    <ItemDetailsContainer>
      <span>{name}</span>
      <span>
        {quantity} x ${price}
      </span>
    </ItemDetailsContainer>
  </CartITemContainer>
);

export default CartItem;
