import React from 'react';

const CheckoutDetails = () => {
  return (
    <div className='lg:gap-x-8 h-full px-12 py-16'>
      <h2 className='mb-10 text-[20px] uppercase font-extrabold'>
        Shipping & Checkout
      </h2>
      <div className='flex flex-col lg:flex-row'>
        <div className='flex-1 flex flex-col lg:flex-row items-start gap-x-6'>
          <div className='flex-1'>
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
                <input
                  className='w-full input'
                  type='text'
                  placeholder='Phone'
                />
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
              {/* block, floor & apartment */}
              <div className='flex justify-between gap-x-4'>
                <input
                  className='w-full input'
                  type='text'
                  placeholder='Block'
                />
                <input
                  className='w-full input'
                  type='text'
                  placeholder='Floor'
                />
                <input
                  className='w-full input'
                  type='text'
                  placeholder='Apt. No.'
                />
              </div>
              {/* textarea */}
              <textarea
                className='textarea h-full'
                placeholder='Mentions (optional)'
              ></textarea>
            </div>
          </div>
          <div className='flex-1 lg:max-w-[40%] border rounded-lg p-4 flex h-full'>
            <h3 className='text-base font-bold uppercase'>Your order</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutDetails;
