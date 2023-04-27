import React, { useEffect, useState } from 'react';
// next image
import Image from 'next/image';
// icons
import { IoMdCheckmark } from 'react-icons/io';

const Topping = ({ topping, additionalTopping, setAdditionalTopping }) => {
  // checkbox state
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleTopping = () => {
    if (isChecked) {
      // use set to ensure unique values
      const newToppings = new Set([...additionalTopping, { ...topping }]);
      setAdditionalTopping(Array.from(newToppings));
    } else {
      // remove the topping with the matching name
      const newToppings = additionalTopping.filter((toppingObj) => {
        return toppingObj.name !== topping.name;
      });
      setAdditionalTopping(newToppings);
    }
  };

  useEffect(() => {
    handleTopping();
  }, [isChecked]);

  return (
    <div
      className={`${
        isChecked && 'border-red-400'
      } w-full max-w-[110px] h-[150px] p-2 flex flex-col items-center justify-center rounded-md bg-white border relative`}
    >
      <Image width={70} height={70} src={topping.image} alt='' />
      <div className='text-md capitalize font-medium text-center'>
        {topping.name}
      </div>
      <input
        className='absolute w-full h-full opacity-0 cursor-pointer'
        type='checkbox'
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      {/* checkmark icon */}
      <div
        className={`${
          isChecked ? 'opacity-100' : 'opacity-0'
        } absolute top-1 right-1`}
      >
        <IoMdCheckmark className='text-xl text-red-500' />
      </div>
    </div>
  );
};

export default Topping;
