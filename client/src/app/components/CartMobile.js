'use client';
import { useContext } from 'react';
// cart context
import { CartContext } from '../context/CartContext';
// icons
import { IoCloseOutline } from 'react-icons/io5';

const CartMobile = () => {
  const { isOpen, setIsOpen } = useContext(CartContext);
  return (
    <div
      className={`${
        isOpen ? 'bottom-0' : '-bottom-full'
      } fixed w-full h-full left-0 bg-purple-500 transition-all duration-300 lg:hidden`}
    >
      {/* close icon */}
      <div onClick={() => setIsOpen(false)} className='cursor-pointer'>
        <IoCloseOutline className='text-3xl' />
      </div>
      CartMobile
    </div>
  );
};

export default CartMobile;
