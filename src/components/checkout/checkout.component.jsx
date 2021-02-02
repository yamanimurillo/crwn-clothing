import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../checkout-item/checkout-item.component';

import './checkout.styles.scss';

const CheckoutPage = ({ cartItems }) => {

    let total = cartItems.reduce((acc, item) => {
        return acc + (item.quantity * item.price);
    }, 0);

    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>

            {
                cartItems.map(cartItem => {
                    return (
                        <CheckoutItem cartItem={cartItem} />
                    );
                })
            }

            <div className='total'>
                <span>TOTAL: ${total}</span>
            </div>

        </div>
    );

};

const mapStateToProps = () => createStructuredSelector({
    cartItems: selectCartItems
});

export default connect(mapStateToProps, null)(CheckoutPage); 