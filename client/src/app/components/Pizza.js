'use client';
import { useState } from 'react';
// image
import Image from 'next/image';
// link
import Link from 'next/link';
// modal
import Modal from 'react-modal';

// bind modal to #pizza
Modal.setAppElement('#pizza');

// modal styles
const modalStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '85vw',
    height: 'auto',
    maxWidth: '900px',
    borderRadius: '30px',
    padding: '3rem',
  },
};

const Pizza = () => {
  // modal state
  const [modal, setModal] = useState(false);

  // open modal
  const openModal = () => {
    setModal(true);
  };

  // close modal
  const closeModal = () => {
    setModal(false);
  };

  return (
    <div id='pizza' className='group py-2 px-4 xl:py-4 xl:px-2 rounded-xl'>
      <Link href={'/pizza/1'}>
        <Image
          width={270}
          height={270}
          src={'/vegetarian.webp'}
          alt=''
          // priority={'lazy'}
          className='group-hover:translate-y-3 transition-all duration-300 mb-8'
        />
      </Link>
      {/* title */}
      <Link href={'/pizza/1'}>
        <div className='text-xl font-semibold mb-3'>Quattro Stagioni</div>
      </Link>
      {/* description */}
      <div className='text-sm text-[#5C6370] font-medium min-h-[60px] mb-6'>
        Ham, mozzarella, pepperoni salami, tomatoes sauce, fresh tomatoes, feta,
        mushrooms, italian spices mix
      </div>
      {/* price & btn */}
      <div className='mb-6 flex items-center justify-between'>
        {/* price -> hidden (sm) - visible (lg) */}
        <div className='hidden lg:flex text-xl font-semibold'>
          starts at $9.99
        </div>
        {/* btn -> hidden (sm) - visible (lg) */}
        <button
          onClick={openModal}
          className='hidden lg:flex btn btn-primary btn-sm'
        >
          Choose
        </button>
        {/* btn -> visible (sm) - hidden (lg) */}
        <button
          onClick={openModal}
          className='btn btn-primary btn-sm lg:hidden px-5'
        >
          starts at $9.99
        </button>
      </div>
      {/* modal */}
      <Modal
        isOpen={modal}
        style={modalStyles}
        onRequestClose={closeModal}
        contentLabel='Pizza Modal'
      >
        <div className='flex flex-col lg:flex-row'>
          <div className='flex-1 bg-blue-100 flex justify-center items-center'>
            {/* pizza image */}
            <Image
              width={450}
              height={450}
              src={'/vegetarian.webp'}
              alt=''
              // priority={1}
              className='group-hover:translate-y-3 transition-all duration-300 mb-8 mx-auto lg:mb-0'
            />
          </div>
          {/* pizza info */}
          <div className='flex-1 bg-pink-200'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
            incidunt facilis nemo maxime quos, aperiam eius repellendus
            distinctio, fugit aliquid quidem porro rerum voluptatem quae hic,
            ipsam ut sequi ea.
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Pizza;
