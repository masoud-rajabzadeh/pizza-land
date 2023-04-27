'use client';
import { useContext } from 'react';
// cart context
import { CartContext } from '../context/CartContext';
// icons
import { GrClose } from 'react-icons/gr';

const CartMobile = () => {
  const { isOpen, setIsOpen } = useContext(CartContext);
  return (
    <div
      className={`${
        isOpen ? 'bottom-0' : '-bottom-full'
      } fixed w-full h-full left-0 bg-purple-500 transition-all duration-300`}
    >
      {/* close icon */}
      <div onClick={() => setIsOpen(false)} className='cursor-pointer'>
        <GrClose className='text-3xl' />
      </div>
      CartMobile
    </div>
  );
};

export default CartMobile;
