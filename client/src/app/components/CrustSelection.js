const CrustSelection = ({ crust, setCrust }) => {
  return (
    <div className='flex justify-center items-center lg:justify-start'>
      {/* crust */}
      <div className='flex gap-x-12 mb-8'>
        <label className='flex items-center gap-x-2 cursor-pointer'>
          <input
            type='radio'
            name='crust'
            value='traditional'
            checked={crust === 'traditional'}
            onChange={(e) => setCrust(e.target.value)}
            className='h-4 w-4 rounded-full border border-red-500 appearance-none checked:bg-red-500 checked:border-transparent cursor-pointer'
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
            className='h-4 w-4 rounded-full border border-red-500 appearance-none checked:bg-red-500 checked:border-transparent cursor-pointer'
          />
          Thin
        </label>
      </div>
    </div>
  );
};

export default CrustSelection;
