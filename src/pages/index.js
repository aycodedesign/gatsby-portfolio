import React from 'react';
import Link from 'gatsby-link';
import styled from "styled-components";

import VCR from '../images/vcr-intro.mp4';

const IndexContainer = styled.div`
  ${'' /* padding: '5rem 1.0875rem 1.45rem'; */}
  padding: 0px;
  height: 700px;
  z-index: 0;
`;

const IndexPage = () => {
  return (
  <IndexContainer>
    <video  width="100%" height="auto" autoplay>
      <source src={VCR} type="video/mp4"/>
    </video>
  </IndexContainer>
  
)
}

export default IndexPage