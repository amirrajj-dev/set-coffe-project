import Link from 'next/link'
import React from 'react'

function BreadCrumb({route}) {
  return (
    <>
    <div className="h-60 flex flex-col items-center justify-center" style={{backgroundImage : 'url(https://set-coffee.com/wp-content/uploads/2022/06/back1.jpg)'}}>
    <h1 className='text-white text-6xl font-bold'>{route}</h1>
    <div className='text-white flex items-center gap-x-2 text-xs mt-8 font-bold'>
      <Link href={'/'} className='transition-colors hover:text-amber-800'>خانه</Link>
      <span>/</span>
      <span>{route}</span>
    </div>
    </div>
    </>
  )
}

export default BreadCrumb