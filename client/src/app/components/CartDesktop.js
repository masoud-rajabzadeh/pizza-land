'use client';
import { useContext } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
// next image
import Image from 'next/image';
// context
import { CartContext } from '../context/CartContext';

const CartDesktop = () => {
  const { isOpen, setIsOpen, cart } = useContext(CartContext);
  return (
    <div
      className={`${
        isOpen ? 'left-0' : '-left-full'
      } bg-tertiary fixed top-0 bottom-0 w-[400px] shadow-2xl hidden lg:flex flex-col transition-all duration-300`}
    >
      {/* top */}
      <div className='w-full h-20 flex items-center justify-between px-10 text-white'>
        <div>Shopping Bag(1)</div>
        {/* close icon */}
        <div onClick={() => setIsOpen(false)} className='cursor-pointer'>
          <IoCloseOutline className='text-3xl' />
        </div>
      </div>
      <div className='px-10'>
        {cart.map((pizza) => {
          console.log(pizza);
          return (
            <div className='text-white'>
              <Image src={pizza.image} width={50} height={50} alt='' />
              <div>{pizza.name}</div>
              <div>{pizza.amount}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CartDesktop;
