import React from 'react';
import Link from 'gatsby-link';
import styled from "styled-components";


const NavContainer = styled.nav`
  .webApp {
    a:hover {
      color: red;
      transition: .5s color;
    }
  }
  
  .graphic {
    a:hover {
      color: blue;
      transition: .5s color;
    }
  }

  .communicate {
    a:hover {
      color: green;
      transition: .5s color;
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
    <div>
      <NavContainer>
        <nav>
          <ul>
            <li className='webApp'><Link to="/web-app/">web&app</Link></li>
            <li className='graphic'><Link to="/graphic/">graphic</Link></li>
            <li className='communicate'><Link to="/communicate/">communicate</Link></li>
          </ul>
        </nav>
      </NavContainer>
    </div>
  )
}

export default Navbar