import Image from 'next/image'
import React from 'react'

const Categories = () => {
  return (
    <div className='pt-10 cursor-pointer pb-6 flex items-center space-x-12'>
        <div className='pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-80 hover:border-gray-200 hover:opacity-100 text-2xl'>
            <Image
                src="/Tree_House.jpg"
                alt="Tree House"
                width={20}
                height={20}
                />
            <span className='text-xs'>Treehouses</span>
        </div>
        <div className='pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-80 hover:border-gray-200 hover:opacity-100 text-2xl'>
            <Image
                src="/Pools.jpg"
                alt="Tree House"
                width={20}
                height={20}
                />
            <span className='text-xs'>Amazing pools</span>
        </div>
        <div className='pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-80 hover:border-gray-200 hover:opacity-100 text-2xl'>
            <Image
                src="/Lake.jpg"
                alt="Tree House"
                width={20}
                height={20}
                />
            <span className='text-xs'>Lakefront</span>
        </div>
        <div className='pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-80 hover:border-gray-200 hover:opacity-100 text-2xl'>
            <Image
                src="/Tree_House.jpg"
                alt="Tree House"
                width={20}
                height={20}
                />
            <span className='text-xs'>Treehouses</span>
        </div>
        <div className='pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-80 hover:border-gray-200 hover:opacity-100 text-2xl'>
            <Image
                src="/Pools.jpg"
                alt="Tree House"
                width={20}
                height={20}
                />
            <span className='text-xs'>Amazing pools</span>
        </div>
        <div className='pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-80 hover:border-gray-200 hover:opacity-100 text-2xl'>
            <Image
                src="/Lake.jpg"
                alt="Tree House"
                width={20}
                height={20}
                />
            <span className='text-xs'>Lakefront</span>
        </div>

    </div>
  )
}

export default Categories
