import Image from 'next/image';

const Banner = () => {
  return (
    <section className='bg-primary bg-banner-pattern min-h-[768px] py-8 lg:py-0'>
      <div className='container mx-auto min-h-[768px] flex'>
        <div className='flex flex-col lg:flex-row items-center text-center lg:text-left'>
          {/* text */}
          <div className='flex-1'>
            <div className='font-bangers text-[32px] text-white uppercase tracking-[0.03em]'>
              Best pizza in town
            </div>
            <h1 className='text-8xl font-bangers text-white drop-shadow-md'>
              Pizza perfection in every bite
            </h1>
          </div>
          {/* text */}
          <div className='flex-1'>
            <Image src={'/pizza-banner.png'} width={550} height={558} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
