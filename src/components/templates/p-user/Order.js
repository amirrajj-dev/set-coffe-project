import React from 'react';

function Order() {
  return (
    <div className="flex items-center justify-between bg-gradient-to-r from-amber-950 via-amber-900 to-amber-800 text-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className='flex items-center gap-x-4'>
        <img
          className='w-16 h-16 rounded-full shadow-md'
          src="https://set-coffee.com/wp-content/uploads/2022/03/ethiopia.png"
          alt="product"
        />
        <span className='text-lg font-medium text-amber-200'>قهوه اتیوپی سیداما</span>
      </div>
      <div className='flex flex-col items-center gap-y-2'>
        <div className="flex items-center gap-x-2">
          <span className='text-sm'>00:08</span>
          <span className='text-sm text-gray-300'>21/10/1402</span>
        </div>
        <h5 className='text-lg font-semibold'>200000 تومان</h5>
      </div>
    </div>
  );
}

export default Order;