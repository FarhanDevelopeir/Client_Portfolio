import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Protected_Component = (props) => {
      const {Component} = props
      const navigate = useNavigate()
      useEffect(()=>{
            const login = localStorage.getItem('admin')
            if(!login){
                  navigate('/admin_authentication')
            }
      })
  return (
    <div>
      <Component/>
    </div>
  )
}

export default Protected_Component