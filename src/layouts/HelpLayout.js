import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
const HelpLayout = () => {
  return (
    <div className='help-layout'>
      <h2>website help</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum iusto
        numquam voluptatibus labore quisquam voluptas quidem tempora, aliquid
        accusamus obcaecati odio ipsa tenetur ea at! Voluptatem labore placeat
        rerum magnam.
      </p>
      <nav>
        <NavLink to='/help/faq'>View the FAQ</NavLink>
        <NavLink to='/help/contact'>Contact Us</NavLink>
      </nav>
      <Outlet />
    </div>
  )
}

export default HelpLayout
