'use client';

import { createContext, useEffect, useState } from 'react';
// create context
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [itemAmount, setItemAmount] = useState(0);

  // item amount
  useEffect(() => {
    const amount = cart.reduce((a, c) => {
      return a + c.amount;
    }, 0);
    setItemAmount(amount);
  });

  // cart total
  useEffect(() => {
    const total = cart.reduce((a, c) => {
      return a + Number(c.total) * c.amount;
    }, 0);
    setCartTotal(total);
  }, [cart]);

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

  // increase amount
  const increaseAmount = (id, total) => {
    const itemIndex = cart.findIndex(
      (item) => item.id === id && item.total === total
    );
    console.log(itemIndex);

    if (itemIndex !== -1) {
      const newCart = [...cart];
      newCart[itemIndex].amount += 1;
      setCart(newCart);
    }
  };

  // decrease amount
  const decreaseAmount = (id, total) => {
    const itemIndex = cart.findIndex(
      (item) => item.id === id && item.total === total
    );
    console.log(itemIndex);

    if (itemIndex !== -1) {
      const newCart = [...cart];
      if (newCart[itemIndex].amount > 1) {
        newCart[itemIndex].amount -= 1;
      }
      setCart(newCart);
    }
  };

  // clear cart
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        isOpen,
        setIsOpen,
        cart,
        addToCart,
        removeItem,
        cartTotal,
        increaseAmount,
        decreaseAmount,
        itemAmount,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
