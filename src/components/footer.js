import React from "react";
import Link from "gatsby-link";
import styled from 'styled-components';
import Icons from './icons.js';


const FooterContainer = styled.div`
 
div {
  background-color: #302e2e;
  display: flex;
  height: auto;
  margin: 0 auto;
  max-width: 960;
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
