'use client';
import { useContext, useState } from 'react';
// image
import Image from 'next/image';
// modal
import Modal from 'react-modal';
import Size from './Size';

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
    minHeight: '580px',
    maxWidth: '900px',
    borderRadius: '30px',
    padding: '3rem',
  },
};

const Pizza = ({ pizza }) => {
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
      <Image
        onClick={openModal}
        width={270}
        height={270}
        src={pizza.image}
        alt=''
        priority={1}
        className='group-hover:translate-y-3 transition-all duration-300 mb-8 cursor-pointer'
      />

      {/* title */}
      <div onClick={openModal}>
        <div className='text-xl font-semibold mb-3 capitalize cursor-pointer'>
          {pizza.name}
        </div>
      </div>
      {/* description */}
      <div className='text-sm text-[#5C6370] font-medium min-h-[60px] mb-6'>
        {pizza.description}
      </div>
      {/* price & btn */}
      <div className='mb-6 flex items-center justify-between'>
        {/* price -> hidden (sm) - visible (lg) */}
        <div className='hidden lg:flex text-xl font-semibold'>
          starts at {pizza.priceSm}
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
        <div className='flex flex-col lg:flex-row lg:gap-x-6 min-h-[480px]'>
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
          {/* pizza info */}
          <div className='flex-1'>
            <div className='mb-8 font-semibold'>
              <h2 className='capitalize text-2xl'>Pizza {pizza.name}</h2>
            </div>
            {/* size */}
            <Size pizza={pizza} id={pizza.id} />
            {/* topping list */}
            <div className='flex flex-wrap gap-3'>
              {pizza.toppings?.map((topping, index) => {
                return (
                  // topping item
                  <div
                    className='w-[100px] p-2 flex flex-col items-center rounded-md bg-white shadow-2xl'
                    key={index}
                  >
                    <Image
                      width={90}
                      height={90}
                      src={topping.image}
                      className='mb-2'
                      alt=''
                    />
                    <div className='text-[12px] capitalize font-medium text-center'>
                      {topping.name}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Pizza;
