'use client';
import { useContext } from 'react';
// icons
import { IoCloseOutline } from 'react-icons/io5';

// components
import CartItem from './CartItem';
// context
import { CartContext } from '../context/CartContext';
import CartBottom from './CartBottom';

const CartDesktop = () => {
  const { isOpen, setIsOpen, cart, itemAmount } = useContext(CartContext);
  return (
    <div
      className={`${
        isOpen ? 'left-0' : '-left-full'
      } bg-tertiary fixed top-0 bottom-0 w-[500px] shadow-2xl hidden lg:flex flex-col transition-all duration-300`}
    >
      {/* top */}
      <div className='w-full h-20 flex items-center justify-between px-10 text-white bg-black/10'>
        <div>Shopping Bag({itemAmount})</div>
        {/* close icon */}
        <div onClick={() => setIsOpen(false)} className='cursor-pointer group'>
          <IoCloseOutline className='text-3xl transition-all group-hover:rotate-180 duration-300' />
        </div>
      </div>
      {/* item list */}
      <div
        className={`px-10 flex flex-col gap-y-4 h-[70vh] py-2 mr-4 mt-8 overflow-y-scroll scrollbar-thin scrollbar-thumb-secondary ${
          cart.length >= 3
            ? 'scrollbar-track-white/10'
            : 'scrollbar-track-transparent'
        } `}
      >
        {cart.map((pizza) => {
          return <CartItem pizza={pizza} key={pizza.id} />;
        })}
      </div>
      {/* cart bottom */}
      <CartBottom />
    </div>
  );
};

export default CartDesktop;
