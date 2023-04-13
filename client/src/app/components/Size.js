import React, { useState } from 'react';
// image
import Image from 'next/image';

const Size = ({ pizza }) => {
  const [size, setSize] = useState('small');
  const [crust, setCrust] = useState('traditional');
  return (
    <div>
      {/* size & crust */}
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
      {/* sizes */}
      <div className='flex gap-x-12 items-center mb-6'>
        <label className='flex flex-col items-center gap-x-2 cursor-pointer'>
          <Image
            src={pizza.image}
            width={60}
            height={60}
            className={`${
              size === 'small'
                ? 'border-[3px] border-red-500 p-[2px] rounded-full'
                : 'border-transparent filter saturate-[.1]'
            }`}
            alt=''
          />
          <input
            type='radio'
            name='size'
            value='small'
            checked={size === 'small'}
            onChange={(e) => setSize(e.target.value)}
            className='appearance-none'
          />
          Small
        </label>
        <label className='flex flex-col items-center gap-x-2 cursor-pointer'>
          <Image
            src={pizza.image}
            width={70}
            height={70}
            className={`${
              size === 'medium'
                ? 'border-[3px] border-red-500 p-[2px] rounded-full'
                : 'border-transparent filter saturate-[.1]'
            }`}
            alt=''
          />
          <input
            type='radio'
            name='size'
            value='medium'
            checked={size === 'medium'}
            onChange={(e) => setSize(e.target.value)}
            className='appearance-none'
          />
          Medium
        </label>
        <label className='flex flex-col items-center gap-x-2 cursor-pointer'>
          <Image
            src={pizza.image}
            width={80}
            height={80}
            className={`${
              size === 'large'
                ? 'border-[3px] border-red-500 p-[2px] rounded-full'
                : 'border-transparent filter saturate-[.1]'
            }`}
            alt=''
          />
          <input
            type='radio'
            name='size'
            value='large'
            checked={size === 'large'}
            onChange={(e) => setSize(e.target.value)}
            className='appearance-none'
          />
          Large
        </label>
      </div>
      {/* crust */}
      <div className='flex gap-x-12 mb-12'>
        <label className='flex items-center gap-x-2 cursor-pointer'>
          <input
            type='radio'
            name='crust'
            value='traditional'
            checked={crust === 'traditional'}
            onChange={(e) => setCrust(e.target.value)}
            className='h-4 w-4 rounded-full border border-red-500 appearance-none checked:bg-red-500 checked:border-transparent'
          />
          Traditional
        </label>
        <label className='flex items-center gap-x-2 cursor-pointer'>
          <input
            type='radio'
            name='crust'
            value='thin'
            checked={crust === 'thin'}
            onChange={(e) => setCrust(e.target.value)}
            className='h-4 w-4 rounded-full border border-red-500 appearance-none checked:bg-red-500 checked:border-transparent'
          />
          Thin
        </label>
      </div>
    </div>
  );
};

export default Size;
