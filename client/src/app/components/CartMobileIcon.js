'use client';
import { useContext } from 'react';
// cart context
import { CartContext } from '../context/CartContext';
// react icons
import { BsHandbagFill } from 'react-icons/bs';

const CartMobileIcon = () => {
  const { isOpen, setIsOpen, itemAmount } = useContext(CartContext);
  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className='lg:hidden bg-[#190b08] w-[72px] h-[72px] rounded-full flex justify-center items-center text-white cursor-pointer fixed right-[10%] bottom-[5%] z-20'
    >
      <BsHandbagFill className='text-4xl' />
      <span className='absolute bottom-3 right-4 bg-primary text-white w-5 h-5 flex justify-center items-center rounded-full font-raleway text-base'>
        {itemAmount}
      </span>
    </div>
  );
};

export default CartMobileIcon;
