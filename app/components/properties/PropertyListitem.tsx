import Image from 'next/image'
import React from 'react'

const PropertyListitem = () => {
  return (
    <div className='cursor-pointer '>
      <div className="overflow-hidden aspect-square rounded-xl">
        <Image
            fill
            src='/beach_1.jpg'
            alt='beach house'
            sizes="(max-width: 768px) 768px, (max-width: 1200px) 786px, 768px"
            className="hover:scale-110 object-cover transition h-full w-full"
        />
      </div>
    </div>
  )
}

export default PropertyListitem
