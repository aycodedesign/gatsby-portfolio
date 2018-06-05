import React from "react";
import Link from "gatsby-link";
import styled from 'styled-components';
import Icons from './icons.js';

import Navbar from './navbar';

import './header.scss';

const Header = ({ siteTitle }) => (
  <div className='header'>

    <h1>
      <Link to="/">{siteTitle}</Link>
    </h1>

    <div>
      <Navbar />

    </div>
  </div>
)


export default Header
