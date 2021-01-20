export const addItemToCart = (cartItems, cartItemToAdd) => {

    const existingCartItem = cartItems.find(cartItem => {
        return cartItem.id === cartItemToAdd.id;
    });

    if (existingCartItem) {
        existingCartItem.quantity = existingCartItem.quantity + 1;
    } else {
        cartItems.push([{ ...cartItemToAdd, quantity: 1}]);
    }

    return [...cartItems];
};