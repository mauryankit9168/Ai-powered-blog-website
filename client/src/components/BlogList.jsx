import React from 'react'
import { motion } from 'motion/react'
import { blogCategories } from '../assets/assets'

const BlogList = () => {

  const [menu, setMenu] = React.useState('All')
  return (
    <div>
      <div className='flex justify-center gap-4 sm:gap-8 my-10 relative'>
        {blogCategories.map((item) => (
          <div key={item} className='relative'>
            <button 
              onClick={() => setMenu(item)}
              className={`cursor-pointer text-gray-500 transition-all px-4 py-2 text-sm font-medium relative z-10 ${
                menu === item ? 'text-white' : ''
              }`}
            >
              {item}
              
              {/* Complete and Corrected Motion Div */}
              {menu === item && (
                <motion.div 
                  layoutId='underline'
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  className='absolute inset-0 bg-primary rounded-full -z-10'
                />
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BlogList