import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import drinkOn from '../images/drink-on.png';
import jsExercise from '../images/js-exercise.png';


const WebAppContainer = styled.div`
  display: inline-block;
  padding-right: 125px;
  padding-left: 125px;
  margin: 75px;
  max-width: 960px;

  img {
    filter: grayscale(100%);
    &:hover {
      filter: none;
      transform: scale(1.1);
      transition: .3s;
    }
  }
`;

const WebAppPage = () => {
  return (
    <div>
    <h1>web & app</h1>
      <p>check out my websites and applications</p>
      
      <WebAppContainer>
        <a href="http://aubreyyoung.aisites.com" target="_blank">
          <img src={jsExercise} alt="JavaScript website" />
        </a>
        <a href="https://marvelapp.com/2fedee4/screen/36136320" target="_blank">
          <img src={drinkOn} alt="Drink-On App" />
        </a>
      </WebAppContainer>
     </div> 
  )
}

export default WebAppPage
