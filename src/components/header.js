import React from "react";
import Link from "gatsby-link";
import styled from 'styled-components';
import Icons from './icons.js';

import Navbar from './navbar';


const HeaderContainer = styled.div`
  background-color:rgb(48, 46, 46);
  margin-bottom: 3rem;
  display: flex;

div {
  position: absolute;
  right: 10px;
}
h1 {
    padding-top: .5rem;
    padding-left: .5rem;
    font-size: 1.5rem;
    a {
      color: #ffffff;
      text-decoration: none;
    }
  }
`

const Header = ({siteTitle}) => (
  <HeaderContainer>
    <h1>
      <Link to="/">{siteTitle}</Link>
    </h1>
    <div>
      <Navbar />
    </div>
  </HeaderContainer>
)


export default Header
