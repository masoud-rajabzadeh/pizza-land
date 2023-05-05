'use client';
import { useContext } from 'react';
// icons
import { IoCloseOutline } from 'react-icons/io5';
import { FaTrash } from 'react-icons/fa';
// components
import CartItem from './CartItem';
// context
import { CartContext } from '../context/CartContext';

const CartDesktop = () => {
  const { isOpen, setIsOpen, cart, cartTotal, itemAmount, clearCart } =
    useContext(CartContext);
  return (
    <div
      className={`${
        isOpen ? 'left-0' : '-left-full'
      } bg-tertiary fixed top-0 bottom-0 w-[500px] shadow-2xl hidden lg:flex flex-col transition-all duration-300`}
    >
      {/* top */}
      <div className='w-full h-20 flex items-center justify-between px-10 text-white bg-black/10'>
        <div>Shopping Bag({itemAmount})</div>
        {/* close icon */}
        <div onClick={() => setIsOpen(false)} className='cursor-pointer group'>
          <IoCloseOutline className='text-3xl transition-all group-hover:rotate-180 duration-300' />
        </div>
      </div>
      {/* item list */}
      <div
        className={`px-10 flex flex-col gap-y-4 h-[70vh] py-2 mr-4 mt-8 overflow-y-scroll scrollbar-thin scrollbar-thumb-secondary ${
          cart.length >= 3
            ? 'scrollbar-track-white/10'
            : 'scrollbar-track-transparent'
        } `}
      >
        {cart.map((pizza) => {
          return <CartItem pizza={pizza} />;
        })}
      </div>
      {/* bottom */}
      {cart.length >= 1 ? (
        <div className='px-8 py-10 text-white'>
          {/* clear cart btn & price cart price */}
          <div className='flex items-center justify-between mb-6'>
            <button
              onClick={() => clearCart()}
              className='w-12 h-12 btn-primary rounded-xl flex justify-center items-center'
            >
              <FaTrash />
            </button>
            <div className='text-lg'>
              Total: $ {parseFloat(cartTotal).toFixed(2)}
            </div>
          </div>
          <div className='flex flex-col gap-y-3'>
            <button className='btn btn-lg btn-secondary text-tertiary font-bold'>
              View cart
            </button>
            <button className='btn btn-lg btn-primary font-bold'>
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <div className='absolute w-full h-full flex justify-center items-center -z-10'>
          <div className='text-white text-xl'>Your cart is empty</div>
        </div>
      )}
    </div>
  );
};

export default CartDesktop;
