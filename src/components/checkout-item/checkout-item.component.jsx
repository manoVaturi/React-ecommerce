import React from 'react';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity } }) => (
  <div className='checkout-item'>
    <div className='image-container'>
      <img alt='item' src={imageUrl} />
    </div>
    <spam className='name'>{name}</spam>
    <spam className='quantity'>{quantity}</spam>
    <spam className='price'>{price}</spam>
    <div className='remove-button'>&#10005;</div>
  </div>
);

export default CheckoutItem;
