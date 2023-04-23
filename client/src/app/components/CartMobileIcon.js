'use client';
import { useContext } from 'react';
import { IoBag } from 'react-icons/io5';
// cart context
import { CartContext } from '../context/CartContext';

const CartMobileIcon = () => {
  const { isOpen, setIsOpen } = useContext(CartContext);
  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className='lg:hidden bg-black w-[70px] h-[70px] rounded-full flex justify-center items-center text-white cursor-pointer fixed right-[10%] bottom-[10%]'
    >
      <IoBag className='text-3xl' />
      <span className='absolute top-0 -right-1 bg-red-500 w-6 h-6 flex justify-center items-center rounded-full'>
        0
      </span>
    </div>
  );
};

export default CartMobileIcon;
