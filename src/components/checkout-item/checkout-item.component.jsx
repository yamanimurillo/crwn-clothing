import React from 'react';
import { addItem, removeItem, clearItem } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, addItem, removeItem, clearItem }) => {
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img alt='item' src={cartItem.imageUrl}></img>
            </div>

            <span className='name'>{cartItem.name}</span>
            <span className='price'>${cartItem.price}</span>
            <span className='quantity'>
                <span onClick={() => {
                    removeItem({...cartItem});
                }}>&#10094;</span>

                {cartItem.quantity}

                <span onClick={() => {
                    addItem({...cartItem});
                }}>&#10095;</span>
            </span>

            <div className='remove-button' onClick={() => {
                clearItem(cartItem)
            }}>
                &#10005;
             </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        addItem: (item) => dispatch(addItem(item)),
        removeItem: item => dispatch(removeItem(item)),
        clearItem: item => dispatch(clearItem(item))
    };
}

export default connect(null, mapDispatchToProps)(CheckoutItem);
