import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../checkout-item/checkout-item.component';
import StripeCheckoutButton from '../stripe-button/stripe-button.component';
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
                cartItems.length ? 
                cartItems.map(item => {
                    return (
                        <CheckoutItem key={item.id} cartItem={item} />
                    );
                }) : 
                <div className='empty-cart'>Your cart is empty</div>
            }

            <div className='total'>
                <span>TOTAL: ${total}</span>
            </div>

            <div style={{color: 'red', margin: '30px', textAlign: 'center', fontSize: '25px'}}>
                *Please use the following test credit card for payments*
                <br></br>
                4242-4242-4242-4242 Exp 01/20 CVV 123
                <br></br>
            </div>
            <StripeCheckoutButton price={total}></StripeCheckoutButton>
        </div>
    );

};

const mapStateToProps = () => createStructuredSelector({
    cartItems: selectCartItems
});

export default connect(mapStateToProps, null)(CheckoutPage); 