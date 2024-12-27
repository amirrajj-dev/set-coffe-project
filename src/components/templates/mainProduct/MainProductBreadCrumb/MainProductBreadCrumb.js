import Link from 'next/link'
import React from 'react'

function MainProductBreadCrumb({title}) {
  return (
    <>
    <div className="flex items-center gap-x-2 text-xs text-gray-500">
        <Link href={'/'}>خانه</Link>
        <span>/</span>
        <Link href={''}>{title}</Link>
        <span>/</span>
    </div>
    </>
  )
}

export default MainProductBreadCrumb