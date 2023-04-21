import React, { useEffect, useState } from 'react';
// next image
import Image from 'next/image';
// icons
import { IoMdCheckmark } from 'react-icons/io';

const Topping = ({ topping, additionalToppings, setAdditionalToppings }) => {
  // checkbox state
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleTopping = () => {
    if (isChecked) {
      // use set to ensure unique values
      const newToppings = new Set([
        ...additionalToppings,
        { name: topping.name },
      ]);
      setAdditionalToppings(Array.from(newToppings));
    } else {
      // remove the topping with the matching name
      const newToppings = additionalToppings.filter((toppingObj) => {
        return toppingObj.name !== topping.name;
      });
      setAdditionalToppings(newToppings);
    }
  };

  useEffect(() => {
    handleTopping();
  }, [isChecked]);

  return (
    <div
      className={`${
        isChecked && 'border-red-400'
      } w-full h-20 p-2 flex items-center justify-between rounded-md bg-white border pr-12 relative`}
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
        } absolute right-3`}
      >
        <IoMdCheckmark className='text-2xl text-red-500' />
      </div>
    </div>
  );
};

export default Topping;
