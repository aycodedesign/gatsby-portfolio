import React from 'react';
import Link from 'gatsby-link';
import styled from "styled-components";


const NavContainer = styled.nav`
margin-bottom: 50px;

  .webApp {
    a:hover {
      color: #0093ca;
      transition: .3s color;
    }
  }
  
  .graphic {
    a:hover {
      color: #0093ca;
      transition: .3s color;
    }
  }

  .communicate {
    a:hover {
      color: #0093ca;
      transition: .3s color;
    }
  }

 ul {
  list-style: none;
  margin: 5px;
  display: flex;
   li {
    font-family: 'Open Sans', sans-serif;
    padding-top: .5rem;
    padding-right: 1rem;
    padding-left: 1rem;
    a {
      font-size: 1rem;
      text-decoration: none;
      color: #ffffff;
    }
  }
}
`;

const Navbar = () => {
  return (
    <NavContainer>
      <nav>
        <ul>
          <li className='webApp'><Link to="/web-app/">web&app</Link></li>
          <li className='graphic'><Link to="/graphic/">graphic</Link></li>
          <li className='communicate'><Link to="/communicate/">communicate</Link></li>
        </ul>
      </nav>
    </NavContainer>
  )
}

export default Navbar