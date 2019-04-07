export const addItem = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );
  if (existingCartItem) {
    existingCartItem.quantity++;
    return [...cartItems];
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItem = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );
  if (existingCartItem.quantity > 1) {
    existingCartItem.quantity--;
    return [...cartItems];
  }

  return [...cartItems.filter(cartItem => cartItem.id !== cartItemToAdd.id)];
};
