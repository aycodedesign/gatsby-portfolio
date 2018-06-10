import React from 'react';
import Link from 'gatsby-link';
import styled from "styled-components";

// ${'' /* color: #FF9586; */}

const NavContainer = styled.nav`
margin-bottom: 50px;

  .webApp {
    a:hover {
      color: #46b29d;
      transition: .3s color;
    }
    .active {
      color: #46b29d;
    }
  }
  
  .graphic {
    a:hover {
      color: #0B6FE1;
      transition: .3s color;
    }
    .active {
      color: #0B6FE1;
    }
  }

  .communicate {
    a:hover {
      color: #DB5665;
      transition: .3s color;
    }
    .active {
      color: #DB5665;
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
          <li className='webApp'><Link to="/web-app/" activeClassName="active">web&app</Link></li>
          <li className='graphic'><Link to="/graphic/" activeClassName="active">graphic</Link></li>
          <li className='communicate'><Link to="/communicate/" activeClassName="active">communicate</Link></li>
        </ul>
      </nav>
    </NavContainer>
  )
}

export default Navbar