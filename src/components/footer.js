import React from "react";
import Link from "gatsby-link";
import styled from 'styled-components';
import Icons from './icons.js';


const FooterContainer = styled.div`
  background-color: #302e2e;
  text-align: center;
  box-shadow: 0px -1px 5px black;
`

const Footer = () => {
  return (
    <FooterContainer>
      <Icons />
    </FooterContainer>
  )
}





export default Footer
