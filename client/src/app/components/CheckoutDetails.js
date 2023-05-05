import React from 'react';

const CheckoutDetails = () => {
  return (
    <div className='flex flex-col lg:flex-row lg:gap-x-8 h-full md:p-8'>
      <div className='bg-pink-200 flex-1 flex flex-col lg:flex-row'>
        <div className='bg-blue-200 flex-1'>1</div>
        <div className='bg-yellow-200 flex-1'>2</div>
      </div>
    </div>
  );
};

export default CheckoutDetails;
