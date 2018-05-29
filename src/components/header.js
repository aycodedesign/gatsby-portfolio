import React from 'react'
import Link from 'gatsby-link'

import './header.scss'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'black',
      marginBottom: '1.45rem',
    }}
  >
  
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
              </h1>
    </div>
      <nav>
        <Link to="/web-app/">web-app</Link>
        <Link to="/graphic/">graphic</Link>
        <Link to="/communicate/">communicate</Link>
      </nav>
  </div>
)

export default Header
