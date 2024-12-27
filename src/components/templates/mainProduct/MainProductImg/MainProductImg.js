'use client'
import React from 'react'
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css'
function MainProductImg({img}) {
  
  return (
    <InnerImageZoom
    src={`/products/${img}`}
    zoomSrc={`/products/${img}`}
    alt="Ethiopia Kochere Coffee"
    className="w-full h-auto transition-transform duration-300 ease-in-out"
    fadeDuration={150} // Adds a fade effect for better visual transition
  />
  )
}

export default MainProductImg