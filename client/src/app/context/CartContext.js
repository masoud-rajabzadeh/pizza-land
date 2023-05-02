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

    // define a function to compare two arrays for equality
    const arraysAreEqual = (array1, array2) => {
      if (array1.length !== array2.length) {
        return false;
      }

      for (let i = 0; i < array1.length; i++) {
        const item1 = array1[i];
        const item2 = array2[i];

        if (JSON.stringify(item1) !== JSON.stringify(item2)) {
          return false;
        }
      }

      return true;
    };

    // check if an identical item already exists in the cart
    const cartItemIndex = cart.findIndex(
      (item) =>
        item.id === id &&
        item.total === total &&
        item.size === size &&
        arraysAreEqual(item.additionalTopping, additionalTopping) &&
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
