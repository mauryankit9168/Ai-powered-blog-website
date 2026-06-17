import React from 'react'
import { motion } from 'motion/react'
import { blog_data, blogCategories } from '../assets/assets'
import BlogCard from './BlogCard'

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
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mb-24 mx-8 sm:mx-16 xl:mx-40'>
        {blog_data.filter((blog) => menu === "All" ? true : blog.category === menu).
          map((blog) => <BlogCard key={blog._id} blog={blog}/>)}
      </div>
    </div>
  )
}

export default BlogList