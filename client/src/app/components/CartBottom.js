import React, { useContext } from 'react';
// icons
import { FaTrash } from 'react-icons/fa';
// context
import { CartContext } from '../context/CartContext';

const CartBottom = () => {
  const { cart, cartTotal, clearCart } = useContext(CartContext);
  return (
    <>
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
        <div className='absolute top-0 w-full h-full flex justify-center items-center -z-10'>
          <div className='text-white text-xl'>Your cart is empty</div>
        </div>
      )}
    </>
  );
};

export default CartBottom;
