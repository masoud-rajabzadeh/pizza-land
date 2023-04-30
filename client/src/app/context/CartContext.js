'use client';

import { createContext, useState } from 'react';
// create context
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useState([]);

  // add to cart
  const addToCart = (
    id,
    image,
    name,
    total,
    additionalTopping,
    size,
    crust
  ) => {
    const newItem = {
      id,
      image,
      name,
      total,
      additionalTopping,
      size,
      crust,
      amount: 1,
    };

    const cartItemIndex = cart.findIndex(
      (item) =>
        item.id === id &&
        item.total === total &&
        item.crust === crust &&
        item.size === size
    );

    if (cartItemIndex === -1) {
      setCart([...cart, newItem]);
    } else {
      const newCart = [...cart];
      newCart[cartItemIndex].amount += 1;
      setCart(newCart);
    }
  };
  console.log(cart);
  return (
    <CartContext.Provider value={{ isOpen, setIsOpen, cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
