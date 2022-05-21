import Image from 'next/image'
import React from 'react'
import { MenuIcon, ChevronDownIcon, HomeIcon, SearchIcon } from '@heroicons/react/solid'
import { BellIcon, ChatIcon, GlobeIcon, PlusIcon, SparklesIcon, SpeakerphoneIcon, VideoCameraIcon } from '@heroicons/react/outline'




function Header() {
  return (
    <div className='sticky top-0 z-50 flex bg-white px-4 py-2 shadow-sm'>
      <div className="relative h-10 w-20 flex-shrink-0 cursor-pointer">
        <Image
          objectFit="contain"
          src="https://links.papareact.com/fqy"
          layout="fill"
        />
      </div>

      <div
        className='flex items-center mx-7 xl:min-w-[300px]'>
        <HomeIcon className="h-5 w-5" />
        <p className='flex-1 ml-2 hidden lg:inline'>Home</p>
        <ChevronDownIcon className="h-5 w-5"/>
      </div>

      {/* Search box */}
      <form className='flex flex-1 items-center space-x-2 border border-gray-200 rounded-md bg-gray-100 px-3 py-1 hover:border-indigo-600 hover:bg-white'>
        <SearchIcon 
        className=" h-6 w-6 text-gray-400"
        />
        <input type="text" className='flex-1 bg-transparent outline-none'
        placeholder='Search Reddit'/>
        <button
        hidden
        />
      </form>

      <div className='mx-5 items-center space-x-2 text-gray-500 flex lg:inline-flex'>
        <SparklesIcon className='icon' />
        <GlobeIcon className='icon' />
        <VideoCameraIcon className='icon' />
        <hr className='h-10 border border-gray-100' />
        <ChatIcon className='icon' />
        <BellIcon className='icon' />
        <PlusIcon className='icon' />
        <SpeakerphoneIcon className='icon' />
      </div>
      <div className='ml-5 flex lg:hidden items-center'>
        <MenuIcon className="icon" />
      </div>
      <div className="hidden lg:flex items-center space-x-2 border-gray-100 p-2 cursor-pointer">
      <div className="relative h-5 w-5 flex-shrink-0">
        <Image
        objectFit='contain'
        src="https://links.papareact.com/23l" 
        alt=""
        layout="fill"
        />
      </div>
      <p className='text-gray-400'>Sign In</p>
      </div>
    </div>
  )
}

export default Header
