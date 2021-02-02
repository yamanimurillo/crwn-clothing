export const addItemToCart = (cartItems, cartItemToAdd) => {

    const existingCartItem = cartItems.find(cartItem => {
        return cartItem.id === cartItemToAdd.id;
    });

    if (existingCartItem) {
        return cartItems.map(cartItem => {
            return cartItem.id === cartItemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : { ...cartItem }

        })
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {

    const existingCartItem = cartItems.find(cartItem => {
        return cartItem.id === cartItemToRemove.id;
    });

    if (existingCartItem) {
        const newCartItems = cartItems.map(cartItem => {
            return cartItem.id === cartItemToRemove.id
                ? { ...cartItem, quantity: cartItem.quantity -1 }
                : { ...cartItem }

        })

        return [...newCartItems.filter(cartItem => cartItem.quantity > 0)];
    }

    return [...cartItems];
}

export const clearItemFromCart = (cartItems, cartItemToClear) => {

    const existingCartItem = cartItems.find(cartItem => {
        return cartItem.id === cartItemToClear.id;
    });

    if (existingCartItem) {
        const newCartItems = cartItems.filter(cartItem => {
            return cartItem.id !== cartItemToClear.id
        });

        return [...newCartItems];
    }

    return [...cartItems];
}