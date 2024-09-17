import React from 'react'
import bg_img from "../assets/images/bgimg.png"


const Blogs = () => {
  return (
      <div 
      style={{
        backgroundImage: `url(${bg_img})`
    }}
      className='heroSection pt-32 md:pt-0 flex flex-col md:flex-row justify-between md:px-10 lg:px-36 items-center text-white bg-gray-900 h-full md:h-lvh'>
      </div>
  )
}

export default Blogs