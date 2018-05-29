import React from 'react'
import Link from 'gatsby-link'

import './navbar.scss'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/web-app/">web-app</Link></li>
        <li><Link to="/graphic/">graphic</Link></li>
        <li><Link to="/communicate/">communicate</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar