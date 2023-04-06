// image
import Image from 'next/image';
// link
import Link from 'next/link';

const Pizza = () => {
  return (
    <Link href={'/pizza/1'} className='group border py-4 px-12'>
      <Image
        width={270}
        height={270}
        src={'/vegetarian.webp'}
        alt=''
        priority={'lazy'}
        className='group-hover:translate-y-2 transition-all duration-200 mb-12'
      />
      {/* title */}
      <div className='text-xl font-medium'>Pizza title</div>
      {/* description */}
      <div>Pizza description</div>
      {/* price & btn */}
      <div className='mb-12 flex items-center justify-between'>
        <div>price</div>
        <button className='btn btn-sm'>Choose</button>
      </div>
    </Link>
  );
};

export default Pizza;
