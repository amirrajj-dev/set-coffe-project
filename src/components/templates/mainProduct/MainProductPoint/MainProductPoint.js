import React from 'react'

function MainProductPoint({score}) {
  return (
    <div className='bg-emerald-600 shadow-md text-white w-64 rounded h-20 px-4 mt-6 brightness-110 flex items-center justify-center'>
        با خرید این محصول کسب خواهید کرد: {score} امتیاز
    </div>
  )
}

export default MainProductPoint