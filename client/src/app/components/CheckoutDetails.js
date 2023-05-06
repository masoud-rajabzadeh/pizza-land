import React from 'react';

const CheckoutDetails = () => {
  return (
    <div className='flex flex-col lg:flex-row lg:gap-x-8 h-full md:p-8'>
      <div className='flex-1 flex flex-col lg:flex-row'>
        <div className='flex-1 px-4'>
          <h2 className='mb-4 text-xl font-semibold'>Shipping & Checkout</h2>
          {/* firstname & lastname */}
          <div className='flex flex-col gap-4'>
            <div className='flex justify-between gap-x-4'>
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
            <div className='flex justify-between gap-x-4'>
              <input className='w-full input' type='text' placeholder='Phone' />
              <input
                className='w-full input'
                type='text'
                placeholder='Email Address'
              />
            </div>
            {/* street & no. */}
            <div className='flex gap-x-4'>
              <input
                className='input w-full'
                type='text'
                placeholder='Street Name'
              />
              <input
                className='w-full max-w-[140px] input'
                type='text'
                placeholder='Street No.'
              />
            </div>
            {/* block & floor & apartment */}
            <div className='flex justify-between gap-x-4'>
              <input className='w-full input' type='text' placeholder='Block' />
              <input className='w-full input' type='text' placeholder='Floor' />
              <input
                className='w-full input'
                type='text'
                placeholder='Apt. No.'
              />
            </div>
            <textarea
              className='textarea h-[186px]'
              placeholder='Mentions (optional)'
            ></textarea>
          </div>
        </div>
        <div className='bg-yellow-200 flex-1 lg:max-w-[40%]'>2</div>
      </div>
    </div>
  );
};

export default CheckoutDetails;
