import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import BadDog from '../images/baddog.jpg';
import Bodegas from '../images/btg-poster.png';
import MTB from '../images/marshall-tyler-band.jpg';

const GraphicContainer = styled.div`
  img {
    filter: grayscale(100%);
    &:hover {
      filter: none;
      transform: scale(1.1);
      transition: .3s;
    }
  }
`;

const GraphicPage = () => {
  return (
  <GraphicContainer>
    <h1>graphic</h1>
    <p>check out my graphic design</p>
      <img src={BadDog} alt="Bad Dog!" />
      <img src={Bodegas} alt="Bodegas Terras Gauda ad"/>
      <img src={MTB} alt="Marshall Tyler Band logo"/>
   </GraphicContainer>
  )
}

export default GraphicPage
