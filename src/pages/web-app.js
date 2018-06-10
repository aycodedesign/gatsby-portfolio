import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import drinkOn from '../images/drink-on.png';
import jsExercise from '../images/js-exercise.png';
import Chess from '../images/chess.png';


const WebAppContainer = styled.div`
  .sect1 {
      margin: 0 auto;
      background-color: #808080;
      color: gray;
      height: 300px;
      width: 100%;
      .description1 {
        position: absolute;
        top: 100px;
        right: 40%;
        padding-top: 25px;
      }
      &:hover {
        background-color: #46b29d;
        color: white;
        transition: 0.3s;
      }
      a {
        position: absolute;
        left: 25%;
        top: 126px;  
      }
    }

  .sect2 {
    margin: 0 auto;
    background-color: #404040;
    color: #404040;
    height: 300px;
    width: 100%;
    .description2 {
      position: absolute;
      top: 400px;
      left: 20%;
      padding-top: 25px;
    }
    &:hover {
      background-color: #49D692;
      color: white;
      transition: 0.3s;
    }
    a {
      position: absolute;
      right: 25%;
      top: 440px;  
    }
  }

  section.sect3 {
    margin: 0 auto;
    background-color: #C0C0C0;
    color: #C0C0C0;
    height: 300px;
    width: 100%;
    .description3 {
      position: absolute;
      top: 700px;
      right: 40%;
      padding-top: 25px;
    }
    &:hover {
      background-color: #40BC81;
      color: white;
      transition: 0.3s;
    }
    a {
      position: absolute;
      left: 25%;
      top: 733px;  
    }
  }

  img {
    filter: grayscale(100%);
    margin-top: 10px;

    &:hover {
      filter: none;
      transition: 0.3s;
    }
  }
`

const WebAppPage = () => {
  return (
    <WebAppContainer>
      <div>
        <section className="sect1">
          <a className='drinkOn' href="https://marvelapp.com/2fedee4/screen/36136320" target="_blank">
            <img src={drinkOn} alt="Drink-On App" />
          </a>
          <div className='description1'>
            <h3>Hello</h3>
            <p>and info</p>
          </div>
        </section>
        <section className="sect2">
          <a href="http://aubreyyoung.aisites.com" target="_blank">
            <img src={jsExercise} alt="JavaScript website" />
          </a>
          <div className='description2'>
            <h3>Hello</h3>
            <p>and info</p>
          </div>
        </section>
        <section className="sect3">
          <a href="http://aubreyyoung.aisites.com/" target="_blank">
            <img src={Chess} alt="Chess Tutorial" />
          </a>
          <div className='description3'>
            <h3>Hello</h3>
            <p>and info</p>
          </div>
        </section>
      </div>
      
     </WebAppContainer> 
  )
}

export default WebAppPage
