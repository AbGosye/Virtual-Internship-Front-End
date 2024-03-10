import React from 'react'

import { Outlet } from 'react-router-dom'
import SidenavApplicant from './SidenavApplicant'

export default function Main() {
  return (
    <div >
      
   <SidenavApplicant/>
  
<Outlet/>

  </div>

  )
}
