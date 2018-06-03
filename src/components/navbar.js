import React from 'react'
import Link from 'gatsby-link'
import styled from "styled-components";


const NavContainer = styled.div`
  margin: 10px;
  padding: 0px;
  text-align: right;
 
  
  ul {
      list-style-type: none;
       display: inline-block;

  }
  .webApp {
    a:hover {
      color: red;
    }
  }
  
  .graphic {
    a:hover {
      color: blue;
    }
  }

  .communicate {
    a: hover {
      color: green;
    }
  }
`


const Navbar = () => {
  return (
      <div>
        <NavContainer>
        <ul>
          <li className='webApp'><Link to="/web-app/">web-app</Link></li>
          <li className='graphic'><Link to="/graphic/">graphic</Link></li>
          <li className='communicate'><Link to="/communicate/">communicate</Link></li>
        </ul>
        </NavContainer>
    </div>
  )
}

export default Navbar