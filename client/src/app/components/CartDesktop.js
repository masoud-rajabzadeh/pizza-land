'use client';
import { useContext } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
// next image
import Image from 'next/image';
// context
import { CartContext } from '../context/CartContext';

const CartDesktop = () => {
  const { isOpen, setIsOpen, cart, removeItem } = useContext(CartContext);
  return (
    <div
      className={`${
        isOpen ? 'left-0' : '-left-full'
      } bg-tertiary fixed top-0 bottom-0 w-[500px] shadow-2xl hidden lg:flex flex-col transition-all duration-300`}
    >
      {/* top */}
      <div className='w-full h-20 flex items-center justify-between px-10 text-white bg-black/10'>
        <div>Shopping Bag({cart.length})</div>
        {/* close icon */}
        <div onClick={() => setIsOpen(false)} className='cursor-pointer group'>
          <IoCloseOutline className='text-3xl transition-all group-hover:rotate-180 duration-300' />
        </div>
      </div>
      {/* item list */}
      <div className='px-10 flex flex-col gap-y-4 h-[70vh] overflow-y-scroll scrollbar-thin scrollbar-thumb-secondary scrollbar-track-white/10 py-4 mr-4'>
        {cart.map((pizza) => {
          return (
            <div className='text-white'>
              <div className='flex gap-x-4'>
                <div className='flex justify-start items-center'>
                  <Image src={pizza.image} width={90} height={90} alt='' />
                </div>
                <div className='flex-1'>
                  <div className='text-xl capitalize mb-2'>
                    Pizza {pizza.name}
                  </div>
                  <div>Qty: {pizza.amount}</div>
                  <div className='capitalize'>{pizza.crust} crust</div>
                  <div className='capitalize'>{pizza.size} size</div>
                </div>
                <div className='flex flex-col justify-between pt-1'>
                  <div
                    onClick={() => removeItem(pizza.id, pizza.total)}
                    className='bg-primary self-end rounded-full cursor-pointer'
                  >
                    <IoCloseOutline className='text-xl transition-all group-hover:rotate-180 duration-300' />
                  </div>
                  <div>Price: {pizza.total * pizza.amount}</div>
                </div>
              </div>
              {/* toppings */}
              <div className='flex flex-wrap items-center gap-3 p-4 border-b border-white/20'>
                <div>
                  Toppings: {pizza.additionalTopping.length === 0 && 'None'}
                </div>
                {pizza.additionalTopping.map((topping) => {
                  return (
                    <div className='capitalize text-sm bg-secondary text-tertiary px-3 py-0.5 font-semibold rounded-full'>
                      {topping.name}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CartDesktop;
