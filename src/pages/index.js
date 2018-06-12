import React from 'react';
import Link from 'gatsby-link';
import styled from "styled-components";

// import Hero from '../images/hero-image.png';
import VCR from '../images/vcr-intro.mp4';

const IndexContainer = styled.div`
  ${'' /* padding: '5rem 1.0875rem 1.45rem'; */}
  padding: 0px;
  height: 700px;
  
  img {
    ${'' /* width: 100%; */}
  }
`;

const IndexPage = () => {
  return (
  <IndexContainer>
    {/* <img src={Hero} alt="Hero movie"/> */}
    <video autoplay width="100%" >
      <source src={VCR} type="video/mp4"/>
    </video>
  </IndexContainer>
  
)
}

export default IndexPage