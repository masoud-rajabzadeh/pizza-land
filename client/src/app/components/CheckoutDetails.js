import React, { useContext } from 'react';
// context
import { CartContext } from '../context/CartContext';

const CheckoutDetails = () => {
  const { cart, cartTotal } = useContext(CartContext);
  return (
    <div className='lg:gap-x-8 h-full p-8 lg:px-12 lg:py-8'>
      <h2 className='mb-6 text-[20px] uppercase font-extrabold text-center lg:text-left'>
        Shipping & Checkout
      </h2>
      <div className='h-[86vh] lg:h-[47.5vh] flex flex-col lg:flex-row lg:gap-x-4'>
        {/* box 1 */}
        <div className='h-full flex-1 overflow-y-auto lg:overflow-visible py-4 px-8 lg:py-0 lg:px-0'>
          {/* firstname & lastname */}
          <div className='flex flex-col gap-4 h-full'>
            <div className='flex flex-col lg:flex-row justify-between gap-4 lg:gap-0 lg:gap-x-4'>
              <input
                className='w-full input'
                type='text'
                placeholder='First Name'
              />
              <input
                className='w-full input'
                type='text'
                placeholder='Last Name'
              />
            </div>
            {/* phone & email address */}
            <div className='flex flex-col lg:flex-row justify-between gap-4 lg:gap-0 lg:gap-x-4'>
              <input className='w-full input' type='text' placeholder='Phone' />
              <input
                className='w-full input'
                type='text'
                placeholder='Email Address'
              />
            </div>
            {/* street & no. */}
            <div className='flex flex-col lg:flex-row justify-between gap-4 lg:gap-0 lg:gap-x-4'>
              <input
                className='input w-full'
                type='text'
                placeholder='Street Name'
              />
              <input
                className='w-full lg:max-w-[140px] input'
                type='text'
                placeholder='Street No.'
              />
            </div>
            {/* block, floor & apartment */}
            <div className='flex justify-between gap-x-4'>
              <input className='w-full input' type='text' placeholder='Block' />
              <input className='w-full input' type='text' placeholder='Floor' />
              <input
                className='w-full input'
                type='text'
                placeholder='Apt. No.'
              />
            </div>
            {/* textarea */}
            <div className='flex-1 h-full'>
              <textarea
                className='textarea w-full h-full'
                placeholder='Mentions (optional)'
              ></textarea>
            </div>
          </div>
        </div>

        <div className='h-full flex-1 lg:max-w-[40%] flex flex-col justify-between pt-3 px-8 lg:p-0'>
          <div className='border rounded-lg flex flex-col mb-4 p-4 h-full'>
            <h3 className='text-base font-extrabold uppercase mb-3 border-b pb-3'>
              Your order
            </h3>
            {/* product & subtotal */}
            {/* <div className='flex justify-between uppercase text-sm font-bold border-b pb-3 mb-3'>
              <div>Product</div>
              <div>Subtotal</div>
            </div> */}
            {/* items */}
            <div className='overflow-y-scroll overflow-hidden scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-white-500 font-medium flex flex-col gap-y-2  h-[180px]'>
              {cart.map((pizza, index) => {
                return (
                  <div
                    className='flex justify-between text-[#767676]'
                    key={index}
                  >
                    <div className='flex gap-x-2'>
                      <div className='capitalize'>{pizza.name}</div>
                      <div>{pizza.amount > 1 && `x ${pizza.amount}`}</div>
                    </div>
                    <div>
                      {parseFloat(pizza.price * pizza.amount).toFixed(2)}
                    </div>
                  </div>
                );
              })}
            </div>
            {/* total */}
            <div className='mt-auto border-t pt-4 flex justify-between font-bold uppercase'>
              <div>Total</div>
              <div>{parseFloat(cartTotal).toFixed(2)}</div>
            </div>
          </div>
          {/* place order button */}
          <button className='btn btn-lg btn-primary w-full'>Place order</button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutDetails;
