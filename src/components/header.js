import React from "react";
import Link from "gatsby-link";
import styled from 'styled-components';
import Icons from './icons.js';

import Navbar from './navbar';


const HeaderContainer = styled.div`
  background-color:rgb(48, 46, 46);
  margin-bottom: 3rem;
  display: flex;
  position: fixed;
  width: 100%;

div {
  position: absolute;
  right: 10px;
}
h1 {
    
    
  }
.home {
  padding-top: 10px;
  a {
    color: #ffffff;
    text-decoration: none;
    
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
