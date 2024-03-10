import React from 'react'
import SideNav from './SideNav'
import { Outlet } from 'react-router-dom'

export default function Nav() {
  return (
    <div >
      
   <SideNav/>
  
<Outlet/>

  </div>

  )
}
