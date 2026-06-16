import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='mx-8 sm:mx-16 xl:mx-24 relative'>
      <div className='text-center mt-20 mb-8'>
        
        {/* AI Feature Badge */}
        <div className='inline-flex items-center justify-center gap-4 px-6 py-1.5 mb-4 border border-primary/40 bg-primary/10 rounded-full text-sm text-primary'>
          <p>New: AI feature integrated</p>
          <img src={assets.star_icon} className='w-2.5' alt="" />
        </div>

        {/* Main Heading */}
        <h1 className='text-3xl sm:text-6xl font-semibold text-grey-700 sm:leading-16'>
          Latest Articles & <span className='text-primary'>Insights</span> on AI, Tech & Lifestyle
        </h1>
        <p className='text-xs sm:text-sm text-slate-500 max-w-sm mx-auto mt-2'>
          Discover the latest trends in technology, lifestyle, finance and more. Written by AI and community experts.
        </p>
        <br/>
        {/* Search Bar Form */}
        <form className='flex justify-between max-w-lg max-sm:scale-75 mx-auto  border border-slate-300 rounded overflow-hidden shadow-md pl-6 bg-white'>
          <div className='flex items-center gap-2 w-full'>
            <img src={assets.search_icon} className='w-4' alt="" />
            <input 
              type="text" 
              placeholder='Search categories or titles...' 
              className='w-full pl-4 outline-none' 
            />
            
          </div>
          <button type='submit' className='bg-primary text-white px-8 py-2 m-1.5 rounded hover:scale-105 transition-all cursor-pointer'>
              Search
            </button>
        </form>

      </div>

      {/* Decorative Background Gradient */}
      <img 
        src={assets.gradientBackground} 
        alt="" 
        className='absolute -top-50 -z-1 opacity-50' 
      />
    </div>
  )
}

export default Header