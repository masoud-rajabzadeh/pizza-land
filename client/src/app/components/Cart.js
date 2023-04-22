import { IoBag } from 'react-icons/io5';

const Cart = () => {
  return (
    <div className='bg-red-500 w-[70px] h-[70px] rounded-full flex justify-center items-center text-white cursor-pointer fixed right-[10%] z-10 bottom-[10%]'>
      <IoBag className='text-3xl' />
    </div>
  );
};

export default Cart;
