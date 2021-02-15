import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;

    const publishableKey = 'pk_test_51IJ4KLB4cWFQKq7G2NiYUJWYHGAiS2L7Sgk2Zt9bfNzARYTKo03Wa3FoFKN1iuiAfvtuHTDY2m0yI4wN0vJlkShG00maAiibgX';

    const onToken = (token) => {
        alert('Payment succeddful');
    };

    return (
        <StripeCheckout
            label='Pay with credit card'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay now'
            token={onToken}
            stripeKey={publishableKey} 
            />
    );
};

export default StripeCheckoutButton;