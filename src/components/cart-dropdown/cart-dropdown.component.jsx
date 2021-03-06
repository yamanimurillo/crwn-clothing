import React from 'react';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.actions.js';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems, history, toggleCartHidden }) => {
    return <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length > 0
                    ? cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem}></CartItem>))
                    : <span className='empty-message'>Your cart is empty</span>
            }
        </div>
        <CustomButton onClick={() => { 
            toggleCartHidden();
            history.push('/checkout'); 
        }}>GO TO CHECKOUT</CustomButton>
    </div>
};

const mapStateToProps = (state) => {
    return {
        cartItems: selectCartItems(state)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleCartHidden: () => dispatch(toggleCartHidden())
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));
