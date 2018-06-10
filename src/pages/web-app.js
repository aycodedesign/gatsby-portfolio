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
        width: 700px;
        position: absolute;
        top: 70px;
        right: 20%;
        padding-top: 25px;
      }
      &:hover {
        background-color: #46b29d;
        color: white;
        transition: .3s ease-in;
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
      width: 600px;
      position: absolute;
      top: 400px;
      left: 20%;
      padding-top: 25px;
    }
    &:hover {
      background-color: #49D692;
      color: white;
      transition: 0.3s ease-in;
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
      width: 600px;
      position: absolute;
      top: 710px;
      right: 15%;
      padding-top: 25px;
    }
    &:hover {
      background-color: #40BC81;
      color: white;
      transition: 0.3s ease-in;
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
            <h3>Drink-On App</h3>
            <p>a team-developed mobile app mock-up to order drinks at venues without having to wait at the bar. <br/>
            MAIN CONTRIBUTIONS: 
            <li>organizing market research on current bartender POS procedure</li>
            <li>identifying additional compatible devices (POS machine, QR scanner technology)</li>
            <li>optimizing user experience (UX)</li>
            </p>
          </div>
        </section>
        <section className="sect2">
          <a href="http://aubreyyoung.aisites.com" target="_blank">
            <img src={jsExercise} alt="JavaScript website" />
          </a>
          <div className='description2'>
            <h3>JavaScript Playground</h3>
            <p>JavaScript-based website that includes JQuery LightBox, full JS clock, interactive pictures, and screen transitions</p>
          </div>
        </section>
        <section className="sect3">
          <a href="http://aubreyyoung.aisites.com/" target="_blank">
            <img src={Chess} alt="Chess Tutorial" />
          </a>
          <div className='description3'>
            <h3>Chess Tutorial</h3>
            <p>single-page website designed to show window animation, parallax scrolling, and chess fundamentals</p>
          </div>
        </section>
      </div>
      
     </WebAppContainer> 
  )
}

export default WebAppPage
