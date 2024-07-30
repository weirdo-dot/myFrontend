import React from 'react'

function ProductCard({img_src, name, description, price}) {
  return (
    <div className='w-60 shadow-5xl rounded overflow-hidden'>
        <img src={img_src} alt={name} className='w-full' />
        <div className='p-5 space-y-3'>
            <h3 className='font-bold'>{name}</h3>
            <p>{description}</p>
            <p>#{price}</p>
        </div>
    </div>
  )
}

export default ProductCard