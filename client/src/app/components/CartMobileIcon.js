'use client';
import { useContext } from 'react';
import Image from 'next/image';
// cart context
import { CartContext } from '../context/CartContext';
// react icons
import { HiShoppingBag } from 'react-icons/hi';

const CartMobileIcon = () => {
  const { isOpen, setIsOpen } = useContext(CartContext);
  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className='lg:hidden bg-[#190b08] w-[72px] h-[72px] rounded-full flex justify-center items-center text-white cursor-pointer fixed right-[10%] bottom-[5%]'
    >
      <HiShoppingBag className='text-5xl' />
      {/* <Image src={'bag.svg'} width={32} height={32} alt='' /> */}
      <span className='absolute bottom-3 right-4 bg-primary text-white w-5 h-5 flex justify-center items-center rounded-full font-raleway text-base'>
        0
      </span>
    </div>
  );
};

export default CartMobileIcon;
