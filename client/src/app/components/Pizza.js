'use client';
// image
import Image from 'next/image';
// link
import Link from 'next/link';

const Pizza = () => {
  return (
    <div className='group py-2 px-4 xl:py-4 xl:px-2 rounded-xl'>
      <Link href={'/pizza/1'}>
        <Image
          width={270}
          height={270}
          src={'/vegetarian.webp'}
          alt=''
          priority={'lazy'}
          className='group-hover:translate-y-3 transition-all duration-300 mb-8'
        />
      </Link>
      {/* title */}
      <Link href={'/pizza/1'}>
        <div className='text-xl font-semibold mb-3'>Quattro Stagioni</div>
      </Link>
      {/* description */}
      <div className='text-sm text-[#5C6370] font-medium min-h-[60px] mb-6'>
        Suncă, mozzarella, salam pepperoni, sos de rosii, rosii proaspete, feta,
        ciuperci, condimente italiene mix
      </div>
      {/* price & btn */}
      <div className='mb-6 flex items-center justify-between'>
        {/* price -> hidden (sm) - visible (lg) */}
        <div className='hidden lg:flex text-xl font-semibold'>
          starts at $9.99
        </div>
        {/* btn -> hidden (sm) - visible (lg) */}
        <button
          onClick={() => console.log(20)}
          className='hidden lg:flex btn btn-primary btn-sm'
        >
          Choose
        </button>
        {/* btn -> visible (sm) - hidden (lg) */}
        <button
          onClick={() => console.log(20)}
          className='btn btn-primary btn-sm lg:hidden px-5'
        >
          starts at $9.99
        </button>
      </div>
    </div>
  );
};

export default Pizza;
