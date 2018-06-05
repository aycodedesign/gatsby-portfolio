import React from 'react'
import Link from 'gatsby-link'
import styled from "styled-components";


const NavContainer = styled.nav`
  margin: 10px;
  padding: 0px;
 
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

 ul {
  list-style: none;
  margin: 0;
  display: flex;
}

 li {
  font-family: 'Oswald', sans-serif;
  font-size: 1rem;
  width: auto;
  ${'' /* line-height: 40px; */}
  ${'' /* height: 40px; */}
  
  }
 
 a {
  text-decoration: none;
  color: #fff;
  transition: .3s color;
  padding-left: 1rem;
  padding-right: 1rem;
}
 
`

const Navbar = () => {
  return (
    <div>
      <NavContainer>
        <nav>
          <ul>
            <li className='webApp'><Link to="/web-app/">web-app</Link></li>
            <li className='graphic'><Link to="/graphic/">graphic</Link></li>
            <li className='communicate'><Link to="/communicate/">communicate</Link></li>
          </ul>
        </nav>
      </NavContainer>
    </div>
  )
}

export default Navbar