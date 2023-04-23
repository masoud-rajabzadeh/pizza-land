'use client';
import { useContext } from 'react';
// cart context
import { CartContext } from '../context/CartContext';
// icons
import { FaDoorClosed } from 'react-icons/fa';

const CartMobile = () => {
  const { isOpen, setIsOpen } = useContext(CartContext);
  return (
    <div
      className={`${
        isOpen ? 'bottom-0' : '-bottom-full'
      } fixed w-full h-full left-0 bg-purple-500 transition-all duration-500`}
    >
      {/* close icon */}
      <div onClick={() => setIsOpen(false)} className='cursor-pointer'>
        <FaDoorClosed className='text-4xl' />
      </div>
      CartMobile
    </div>
  );
};

export default CartMobile;
