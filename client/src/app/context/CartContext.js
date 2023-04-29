'use client';

import { createContext, useState } from 'react';
// create context
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useState([]);

  const addToCart = (id, total, additionalTopping, size, crust) => {
    console.log({ id, total, additionalTopping, size, crust });
  };

  return (
    <CartContext.Provider value={{ isOpen, setIsOpen, cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
