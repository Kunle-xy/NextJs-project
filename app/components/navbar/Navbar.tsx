import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Searchfilter from './Searchfilter'
import UserNav from './UserNav'
import AddPropertyButton from './AddPropertyButton'

const Navbar = () => {
  return (
    <nav className='w-full fixed top-0 left-0 py-6 border-b-2 z-10 bg-white'>
        <div className='max-w-[1500px] mx-auto px-6'>
         <div className='flex justify-between items-center'>
          <Link href={"/"}>
              <Image
                  src="/logo.png"
                  width={180}
                  height={38}
                  alt="logo"
              />
          </Link>
          <div className='flex space-x-6'>
            <Searchfilter />
          </div>

          <div className='flex items-center space-x-6'>
            <AddPropertyButton />
            <UserNav />
          </div>

         </div>
        </div>
    </nav>
  )
}

export default Navbar
