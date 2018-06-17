import React from 'react';
import styled from 'styled-components';

import drinkOn from '../images/drink-on.png';
import jsExercise from '../images/js-exercise.png';
import Chess from '../images/chess.png';


const WebAppContainer = styled.div`
@media only screen and (min-width: 531px) {
  img {
    filter: grayscale(100%);
    margin-top: 10px;
    &:hover {
      filter: none;
      transition: 0.3s;
    }
  }
  .sect1 {
      margin: 0 auto;
      background-color: #808080;
      color: gray;
      height: 300px;
      width: 100%;
      .description1 {
        width: 25%;
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
      width: 25%;
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

  .sect3 {
    margin: 0 auto;
    background-color: #C0C0C0;
    color: #C0C0C0;
    height: 300px;
    width: 100%;
    .description3 {
      width: 25%;
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
  }
${'' /* end media query */}

@media only screen and (max-width: 530px) {
    ${'' /* img {
    filter: grayscale(100%);
    &:hover {
      filter: none;
      transition: 0.3s;
    } */}
  }
  .sect1 {
    margin: 0 auto;
    padding-bottom: 20px;
    background-color: #808080;
    color: gray;
    height: 525px;
    width: 100%;
    .description1 {
      text-align: center;
      width: 80%;
      margin: 0 auto;
      padding-top: 425px;
    }
    &:hover {
      background-color: #46b29d;
      color: white;
      transition: .3s ease-in;
    }
    img {
      width: 60%;
      height: auto;
      position: absolute;
      right: 50%;
      top: 100px;  
      transform: translateX(50%);
    }
  }

  .sect2 {
    margin: 0 auto;
    padding-bottom: 10px;
    background-color: #404040;
    color: #404040;
    height: auto;
    width: 100%;
    .description2 {
      text-align: center;
      width: 80%;
      margin: 0 auto;
      padding-top: 225px;
    }
    &:hover {
      background-color: #49D692;
      color: white;
      transition: 0.3s ease-in;
    }
    img {
      width: 80%;
      height: auto;
      position: absolute;
      right: 50%;
      top: 625px;  
      transform: translateX(50%);
    }
  }

  .sect3 {
    margin: 0 auto;
    padding-bottom: 10px;
    background-color: #C0C0C0;
    color: #C0C0C0;
    height: auto;
    width: 100%;
    .description3 {
    text-align: center;
    width: 80%;
    margin: 0 auto;
    padding-top: 225px;
    }
    &:hover {
      background-color: #40BC81;
      color: white;
      transition: 0.3s ease-in;
    }
    img {
      width: 80%;
      height: auto;
      position: absolute;
      right: 50%;
      top: 1000px;  
      transform: translateX(50%);
    }
  }
}
`

const WebAppPage = () => {
  return (
    <WebAppContainer>
      <div>
        <section className="sect1">
          <div className='description1'>
            <h3>Drink-On App</h3>
              <a className='drinkOn' href="https://marvelapp.com/2fedee4/screen/36136320" target="_blank">
                <img src={drinkOn} alt="Drink-On App" />
              </a>
            <p>a team-developed mobile app mock-up to order beverages without waiting at the bar. 
            {/* MAIN CONTRIBUTIONS: 
            <li>organizing market research on current bartender POS procedure</li>
            <li>ID'ing compatible devices (POS machine, QR scanner technology)</li>
            <li>optimizing user experience (UX)</li> */}
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
            <p>single-page website showing off window animation, parallax scrolling, and chess fundamentals</p>
          </div>
        </section>
      </div>
      
     </WebAppContainer> 
  )
}

export default WebAppPage
