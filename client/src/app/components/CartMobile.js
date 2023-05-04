'use client';
import { useContext } from 'react';
// cart context
import { CartContext } from '../context/CartContext';
// icons
import { IoCloseOutline } from 'react-icons/io5';
import CartItem from './CartItem';
import Link from 'next/link';

const CartMobile = () => {
  const { isOpen, setIsOpen, cart } = useContext(CartContext);
  return (
    <div
      className={`${
        isOpen ? 'bottom-0' : '-bottom-full'
      } fixed w-full h-full left-0 bg-tertiary transition-all duration-300 lg:hidden z-10`}
    >
      {/* close icon */}
      <div onClick={() => setIsOpen(false)} className='cursor-pointer'>
        <IoCloseOutline className='text-3xl' />
      </div>
      <div>
        {cart.map((pizza) => {
          return <CartItem pizza={pizza} />;
        })}
      </div>
      <Link href={'/checkout'}>Checkout</Link>
    </div>
  );
};

export default CartMobile;
