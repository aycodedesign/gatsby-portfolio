import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import drinkOn from '../images/drink-on.png';
import jsExercise from '../images/js-exercise.png';
import Chess from '../images/chess.png';


const WebAppContainer = styled.div`
  background-color: #46b29d;
  div {
    margin: 0 auto;
    max-width: 1200px;
    min-height: 725px;
    display: block;
    .gallery {
      margin: 15px;
      float: left;
      ${'' /* display: flex; */}
    }
  }
  img {
    filter: grayscale(100%);
    &:hover {
      filter: none;
      transform: scale(1.1);
      transition: 0.3s;
    }
  }
`

const WebAppPage = () => {
  return (
    <WebAppContainer>
      <div>
        <h1>web & app</h1>
        <p>check out my websites and applications</p>
        <a className='gallery' href="https://marvelapp.com/2fedee4/screen/36136320" target="_blank">
          <img src={drinkOn} alt="Drink-On App" />
        </a>
        <a className='gallery' href="http://aubreyyoung.aisites.com" target="_blank">
          <img src={jsExercise} alt="JavaScript website" />
        </a>
        <a className='gallery' href="http://aubreyyoung.aisites.com/" target="_blank">
          <img src={Chess} alt="Chess Tutorial" />
        </a>

      </div>
     </WebAppContainer> 
  )
}

export default WebAppPage
