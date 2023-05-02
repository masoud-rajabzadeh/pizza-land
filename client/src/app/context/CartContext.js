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
    // sort additionalTopping array by name
    additionalTopping.sort((a, b) => a.name.localeCompare(b.name));

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
        item.size === size &&
        // check if additionalTopping array is equal
        JSON.stringify(item.additionalTopping) ===
          JSON.stringify(additionalTopping) &&
        item.crust === crust
    );

    if (cartItemIndex === -1) {
      setCart([...cart, newItem]);
    } else {
      const newCart = [...cart];
      newCart[cartItemIndex].amount += 1;
      setCart(newCart);
    }
  };

  // remove item
  const removeItem = (id, total) => {
    const itemIndex = cart.findIndex(
      (item) => item.id === id && item.total === total
    );

    if (itemIndex !== -1) {
      const newCart = [...cart];
      newCart.splice(itemIndex, 1);
      setCart(newCart);
    }
  };

  return (
    <CartContext.Provider
      value={{ isOpen, setIsOpen, cart, addToCart, removeItem }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
