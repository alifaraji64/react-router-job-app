import React from 'react'
import { NavLink,Outlet } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'
const RootLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <h1>jobarouter</h1>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/help'>Help</NavLink>
          <NavLink to='/careers'>Careers</NavLink>
        </nav>
        <Breadcrumbs/>
      </header>
      <Outlet/>
    </div>
  )
}

export default RootLayout
