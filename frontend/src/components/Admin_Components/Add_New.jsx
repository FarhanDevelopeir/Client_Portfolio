import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import AddContent from './AddContent'
import { ContextBox } from './features/AdminSidebar_Slice'

const Add_New = () => {
  // const [openContentBox, setOpenContentBox] = useState(false)
  const activeItem = useSelector((state)=>state.sideBar.activeSiderbarItem)
  const openContentBox = useSelector((state)=>state.sideBar.openContentBox)
  const dispatch = useDispatch()
  
  
  return (
    <div className=' fixed w-[93%] bg-white mt-12 md:-mt-1 md:w-[78%]  flex justify-between items-center pt-7 pb-1 md:pb-5 px-3 md:px-8 mx-2 md:mx-12 border-b-2 '>
      <h1 className='text-xl font-semibold'>{activeItem}</h1>
      <button onClick={()=>{dispatch(ContextBox(true))}} className='text-white   focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-blue-800'>Add New</button>
      {/* {openContentBox && <AddContent/>} */}
      {openContentBox && <AddContent/>}
    </div>
  )
}

export default Add_New