import React from 'react';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem }) => {
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img alt='item' src={cartItem.imageUrl}></img>
            </div>

            <span className='name'>{cartItem.name}</span>
            <span className='price'>${cartItem.price}</span>
            <span className='quantity'>{cartItem.quantity}</span>

            <div className='remove-button'>
                &#10005;
                 </div>
        </div>
    );
};

export default CheckoutItem;