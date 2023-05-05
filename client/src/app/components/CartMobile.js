'use client';
import { useContext } from 'react';
// next link
import Link from 'next/link';
// icons
import { IoCloseOutline } from 'react-icons/io5';
import { FaTrash } from 'react-icons/fa';
// components
import CartItem from './CartItem';
// cart context
import { CartContext } from '../context/CartContext';
import CartBottom from './CartBottom';

const CartMobile = () => {
  const { isOpen, setIsOpen, cart, cartTotal, itemAmount, clearCart } =
    useContext(CartContext);
  return (
    <div
      className={`${
        isOpen ? 'bottom-0' : '-bottom-full'
      } fixed w-full h-full left-0 bg-tertiary transition-all duration-300 lg:hidden z-10`}
    >
      {/* close icon */}
      <div onClick={() => setIsOpen(false)} className='cursor-pointer'>
        <IoCloseOutline className='text-3xl text-white' />
      </div>
      {/* items */}
      <div
        className={`px-4 flex flex-col gap-y-4 py-2 mr-4 mt-8 h-[60vh] overflow-y-scroll scrollbar-thin scrollbar-thumb-secondary ${
          cart.length >= 3
            ? 'scrollbar-track-white/10'
            : 'scrollbar-track-transparent'
        }`}
      >
        {cart.map((pizza) => {
          return <CartItem pizza={pizza} />;
        })}
      </div>
      {/* cart bottom */}
      <CartBottom />
      {/* <Link href={'/checkout'}>Checkout</Link> */}
    </div>
  );
};

export default CartMobile;
