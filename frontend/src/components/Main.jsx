import React from 'react'
import Navbar from './Navbar'
// import HeroSection from './HeroSection'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default Main