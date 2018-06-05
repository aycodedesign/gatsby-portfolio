import React from "react";
import Link from "gatsby-link";
import styled from 'styled-components';
import Icons from './icons.js';


const FooterContainer = styled.div`
 
div {
  background-color: black;
  margin-bottom: 3rem;
  display: flex;
  padding-bottom: 0px;
  height: auto;
  color: red;
}
`

const Footer = () => (
  <div>
    <FooterContainer>

      <Icons />

    </FooterContainer>





  </div>
)





export default Footer
