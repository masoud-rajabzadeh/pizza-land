import React from 'react';
// image
import Image from 'next/image';

const SizeSelection = ({ pizza, size, setSize }) => {
  return (
    <div>
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
    </div>
  );
};

export default SizeSelection;
