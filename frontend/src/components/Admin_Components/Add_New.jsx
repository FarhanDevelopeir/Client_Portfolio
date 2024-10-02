import React from 'react'
import {useSelector} from 'react-redux'

const Add_New = () => {
  const activeItem = useSelector((state)=>state.sideBar.activeSiderbarItem)
  
  
  return (
    <div className=' flex justify-between items-center pt-10 pb-5 px-3 md:px-8 mx-2 md:mx-12 border-b-2 '>
      <h1 className='text-xl font-semibold'>{activeItem}</h1>
      <button className='text-white   focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-blue-800'>Add New</button>
    </div>
  )
}

export default Add_New