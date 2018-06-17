import React from "react";
import Link from "gatsby-link";
import styled from 'styled-components';
import Icons from './icons.js';

import Navbar from './navbar';


const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  background-color: #555E63;
  box-shadow: 0px 1px 5px black;
  z-index: 3;
div {
  position: absolute;
  right: 10px;
}

.home {
  padding-top: 10px;
  a {
    color: #ffffff;
    text-decoration: none;
  }
  &:hover {
  transform: scale(1.1);
  transition: .1s ease-in;
  }
}

@media only screen and (max-width: 530px) {
  .home {
  margin-bottom: 40px; 
  ${'' /* this is the navbar height */}
  a {
    color: #ffffff;
    text-decoration: none;
  }
  &:hover {
  transform: scale(1.1);
  transition: .1s ease-in;
  }
}
}
`

const Header = ({siteTitle}) => {
  return (
    <HeaderContainer>
      <h2 className="home">
        <Link to="/">{siteTitle}</Link>
      </h2>
      <div>
        <Navbar />
      </div>
    </HeaderContainer>
  )
}


export default Header
