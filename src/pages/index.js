import React from 'react'
import Link from 'gatsby-link'
import styled from "styled-components";

import Hero from '../images/hero-image.png'

const IndexContainer = styled.div`
  ${'' /* padding: '5rem 1.0875rem 1.45rem'; */}
  padding: 0px;
  
  img {
    width: 100%;
  }
 

 
`;

const IndexPage = () => {
  return (
  <IndexContainer>
    <img src={Hero} alt="Hero movie"/>
  </IndexContainer>
)
}

export default IndexPage
