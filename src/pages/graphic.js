import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import BadDog from '../images/baddog.jpg';
import Bodegas from '../images/btg-poster.png';
import MTB from '../images/marshall-tyler-band.jpg';

const GraphicContainer = styled.div`
  background-color: #27BCC2;
  p {
    text-align: center;
  }
  div {
    margin: 0 auto;
    max-width: 1500px;
    min-height: 570px;
    display: block;
    .gallery {
      margin: 15px;
      float: left;
    }
  }
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
      <div>
        <img className='gallery' src={BadDog} alt="Bad Dog!" />
        <img className='gallery' src={MTB} alt="Marshall Tyler Band logo"/>
        <img className='gallery' src={Bodegas} alt="Bodegas Terras Gauda ad"/>
    </div>
   </GraphicContainer>
  )
}

export default GraphicPage
