import React from 'react';
// image
import Image from 'next/image';
// import components
import Size from './Size';

const PizzaDetails = ({ pizza }) => {
  console.log(pizza.id);
  return (
    <div className='flex flex-col lg:flex-row lg:gap-x-12 min-h-[480px]'>
      <div className='flex-1 flex justify-center items-center'>
        {/* pizza image */}
        <Image
          width={450}
          height={450}
          src={pizza.image}
          alt=''
          priority={1}
          className='group-hover:translate-y-3 transition-all duration-300 mb-8 mx-auto lg:mb-0'
        />
      </div>
      {/* pizza details */}
      <div className='flex-1 overflow-y-scroll h-[45vh] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-white-500 p-2'>
        {/* name */}
        <div className='font-semibold'>
          <h2 className='capitalize text-3xl mb-1'>Pizza {pizza.name}</h2>
        </div>
        {/* size */}
        <Size pizza={pizza} id={pizza.id} />
        {/* topping list */}
        <div className='flex flex-wrap gap-3'>
          {pizza.toppings?.map((topping, index) => {
            return (
              // topping item
              <div
                className='w-full h-20 p-2 flex items-center justify-between rounded-md bg-white border pr-12'
                key={index}
              >
                <Image
                  width={70}
                  height={70}
                  src={topping.image}
                  // className='mb-2'
                  alt=''
                />
                <div className='text-md capitalize font-medium text-center'>
                  {topping.name}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PizzaDetails;
