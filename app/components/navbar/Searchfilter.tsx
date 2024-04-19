import React from 'react'

const Searchfilter = () => {
  return (
    <div className=' flex items-center justify-between border rounded-full shadow-lg'>
        <div className='hidden lg:block'>
            <div className='flex items-center justify-between'>
                <div className='cursor-pointer w-[250px] h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100'>
                    <p className='text-xs font-semibold'>where</p>
                    <p className='text-sm '>Wanted Location</p>
                </div>

                <div className='cursor-pointer h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100'>
                    <p className='text-xs font-semibold'>Check in</p>
                    <p className='text-sm '>Add dates</p>
                </div>

                <div className='cursor-pointer h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100'>
                    <p className='text-xs font-semibold'>Check out</p>
                    <p className='text-sm '>Add date</p>
                </div>

                <div className='cursor-pointer h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100'>
                    <p className='text-xs font-semibold'>Who</p>
                    <p className='text-sm '>Add guests</p>
                </div>
            </div>
        </div>

        <div className='p-2'>
            <div className='p-2 lg:p-4 bg-airbnb hover:bg-airbnb-dark transition cursor-pointer rounded-full text-white'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>

            </div>
        </div>

    </div>
  )
}

export default Searchfilter
