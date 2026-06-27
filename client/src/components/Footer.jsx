import React from 'react'
import { assets, footer_data } from '../assets/assets'

const Footer = () => {
  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32 bg-primary/3'>
      <div className='flex flex-col md:flex-row items-start justify-between gap-10 py-16 border-t border-gray-200/80 w-full'>
        
        {/* Left Column: Logo & Description */}
        <div className='flex flex-col items-start max-w-sm'>
          <img src={assets.logo} alt="logo" className='w-32 sm:w-44' />
          <p className='max-w-[410px] mt-6 text-gray-500/80 text-sm leading-relaxed'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rem accusamus atque qui error quo enim.
          </p>
        </div>

        {/* Right Columns: Links mapped dynamically from footerData */}
        <div className='flex flex-wrap justify-between w-full max-w-[740px] gap-8'>
            {footer_data.map((section, index) => (
            <div key={index} className='flex flex-col min-w-[150px]'>
                <h3 className='font-semibold text-base text-gray-800 mb-5'>
                {section.title}
                </h3>
                <ul className='text-sm space-y-3 text-gray-500/90'>
                {section.links.map((link, i) => (
                    <li key={i}>
                    <a href="#" className='hover:underline transition-all'>
                        {link}
                    </a>
                    </li>
                ))}
                </ul>
            </div>
            ))}
        </div>
            
      </div>
    
      {/* Copyright Footer Section */}
      <p className='py-4 text-center text-xs md:text-sm text-gray-500'>
        Copyright 2025 @ QuickBlog GreatStack - All Right Reserved.
      </p>
    </div>
  )
}

export default Footer