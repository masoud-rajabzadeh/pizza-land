import React, { useState } from 'react';
// image
import Image from 'next/image';
// import components
import SizeSelection from './SizeSelection';
import CrustSelection from './CrustSelection';
import Topping from './Topping';

const PizzaDetails = ({ pizza }) => {
  // pizza size state
  const [size, setSize] = useState('small');
  // pizza crust state
  const [crust, setCrust] = useState('traditional');
  // toppings state
  const [additionalToppings, setAdditionalToppings] = useState([]);

  console.log(additionalToppings);
  return (
    <div className='flex flex-col lg:flex-row lg:gap-x-12 h-full md:p-12'>
      <div className='lg:flex-1 flex justify-center items-center'>
        {/* pizza image */}
        <div className='max-w-[300px] lg:max-w-none'>
          <Image
            width={450}
            height={450}
            src={pizza.image}
            alt=''
            priority={1}
            className='group-hover:translate-y-3 transition-all duration-300 mx-auto lg:mb-0'
          />
        </div>
      </div>
      {/* pizza details */}
      <div className='flex flex-col flex-1'>
        <div className='flex-1 p-2 text-center lg:text-left'>
          <div className='flex-1 overflow-y-scroll h-[46vh] scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-white-500 pr-2'>
            {/* name */}
            <div className='font-semibold'>
              {/* name */}
              <h2 className='capitalize text-3xl mb-1'>Pizza {pizza.name}</h2>
              {/* size & crust text */}
              <div className='mb-6 text-lg font-medium'>
                <span>
                  {size === 'small'
                    ? '25 cm'
                    : size === 'medium'
                    ? '30 cm'
                    : size === 'large'
                    ? '35 cm'
                    : null}
                </span>
                <span>, {crust} crust</span>
              </div>
            </div>
            {/* size */}
            <SizeSelection
              pizza={pizza}
              id={pizza.id}
              size={size}
              setSize={setSize}
              crust={crust}
            />
            <CrustSelection crust={crust} setCrust={setCrust} />
            {/* toppings */}
            <div className='mb-4 text-xl font-semibold'>Choose topping</div>
            {/* topping list */}
            <div className='flex flex-wrap gap-2'>
              {pizza.toppings?.map((topping, index) => {
                return (
                  // topping item
                  <Topping
                    topping={topping}
                    key={index}
                    additionalToppings={additionalToppings}
                    setAdditionalToppings={setAdditionalToppings}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className='h-full flex items-center px-2 lg:items-end'>
          <button className='btn btn-lg btn-primary w-full flex justify-center gap-x-2 text-[20px] font-semibold'>
            <div>Add to cart for</div>
            <div>
              {`${
                size === 'small'
                  ? pizza.priceSm
                  : size === 'medium'
                  ? pizza.priceMd
                  : size === 'large'
                  ? pizza.priceLg
                  : null
              }`}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PizzaDetails;
