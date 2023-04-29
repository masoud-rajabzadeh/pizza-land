'use client';
import { useContext } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
// context
import { CartContext } from '../context/CartContext';

const CartDesktop = () => {
  const { isOpen, setIsOpen } = useContext(CartContext);
  return (
    <div
      className={`${
        isOpen ? 'left-0' : '-left-full'
      } bg-tertiary fixed top-0 bottom-0 w-[400px] shadow-2xl hidden lg:flex transition-all duration-300`}
    >
      {/* top */}
      <div className='w-full h-20 flex items-center justify-between px-10 text-white'>
        <div>Shopping Bag(1)</div>
        {/* close icon */}
        <div onClick={() => setIsOpen(false)} className='cursor-pointer'>
          <IoCloseOutline className='text-3xl' />
        </div>
      </div>
    </div>
  );
};

export default CartDesktop;
