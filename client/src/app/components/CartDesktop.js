'use client';
import { useContext } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
// next image
import Image from 'next/image';
// context
import { CartContext } from '../context/CartContext';
// icons
import { BiPlus, BiMinus } from 'react-icons/bi';

const CartDesktop = () => {
  const {
    isOpen,
    setIsOpen,
    cart,
    removeItem,
    cartTotal,
    increaseAmount,
    decreaseAmount,
  } = useContext(CartContext);
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
      <div
        className={`px-10 flex flex-col gap-y-4 h-[70vh] py-2 mr-4 mt-8 overflow-y-scroll scrollbar-thin scrollbar-thumb-secondary ${
          cart.length > 3
            ? 'scrollbar-track-white/10'
            : 'scrollbar-track-transparent'
        } `}
      >
        {cart.map((pizza) => {
          return (
            <div className='text-white select-none'>
              <div className='flex gap-x-4 mb-2'>
                <div className='flex justify-center items-center'>
                  <Image src={pizza.image} width={90} height={90} alt='' />
                </div>
                <div className='flex-1 flex flex-col gap-y-2'>
                  <div className='text-lg capitalize'>pizza {pizza.name}</div>
                  <div className='flex flex-col gap-y-2'>
                    <div className='py-2 flex items-center gap-x-3'>
                      <div
                        onClick={() => decreaseAmount(pizza.id, pizza.total)}
                        className='w-4 h-4 bg-secondary text-tertiary rounded-full flex justify-center items-center cursor-pointer hover:scale-110 hover:bg-secondary transition-all'
                      >
                        <BiMinus />
                      </div>
                      <div className='text-secondary font-semibold flex flex-1 max-w-[30px] justify-center items-center'>
                        {pizza.amount}
                      </div>
                      <div
                        onClick={() => increaseAmount(pizza.id, pizza.total)}
                        className='w-4 h-4 bg-secondary text-tertiary rounded-full flex justify-center items-center cursor-pointer hover:scale-110 hover:bg-secondary transition-all'
                      >
                        <BiPlus />
                      </div>
                    </div>
                    <div className='capitalize'>
                      crust:{' '}
                      <span className='text-secondary font-semibold'>
                        {pizza.crust}
                      </span>
                    </div>
                    <div className='capitalize'>
                      size:{' '}
                      <span className='text-secondary font-semibold'>
                        {pizza.size}
                      </span>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col justify-between pt-1'>
                  <div
                    onClick={() => removeItem(pizza.id, pizza.total)}
                    className='bg-primary w-4 h-4 flex justify-center items-center self-end rounded-full cursor-pointer hover:scale-110 duration-100 transition-all'
                  >
                    <IoCloseOutline />
                  </div>
                  <div className='capitalize'>
                    price:{' '}
                    <span className='text-secondary font-bold'>
                      $ {parseFloat(pizza.total * pizza.amount).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
              {/* toppings */}
              <div className='flex flex-wrap items-center gap-3 p-6 border-b border-white/10'>
                <div>
                  Toppings: {pizza.additionalTopping.length === 0 && 'None'}
                </div>
                {pizza.additionalTopping.map((topping) => {
                  return (
                    <div className='capitalize text-sm bg-secondary text-tertiary px-3 py-[1px] font-semibold rounded-full'>
                      {topping.name}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      {/* cart total */}
      <div className='bg-purple-400/20 px-8 py-8 text-white'>
        <div>Total: {parseFloat(cartTotal).toFixed(2)}</div>
      </div>
    </div>
  );
};

export default CartDesktop;
