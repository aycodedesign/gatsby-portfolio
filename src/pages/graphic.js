import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import BadDog from '../images/baddog.jpg';
import Bodegas from '../images/btg-poster.png';
import MTB from '../images/marshall-tyler-band.jpg';

const GraphicContainer = styled.div`
    .sect1 {
      margin: 0 auto;
      background-color: #808080;
      color: gray;
      height: 350px;
      width: 100%;
      .description1 {
        width: 500px;
        position: absolute;
        top: 170px;
        right: 20%;
        padding-top: 25px;
      }
      &:hover {
        background-color: #0093CA;
        color: white;
        transition: .3s ease-in;
      }
      img {
        position: absolute;
        left: 25%;
        top: 95px;  
      }
    }
    .sect2 {
    margin: 0 auto;
    background-color: #404040;
    color: #404040;
    height: 350px;
    width: 100%;
    .description2 {
      width: 500px;
      position: absolute;
      top: 500px;
      left: 20%;
      padding-top: 25px;
    }
    &:hover {
      background-color: #005B7D;
      color: white;
      transition: 0.3s ease-in;
    }
    img {
      position: absolute;
      right: 25%;
      top: 475px;  
    }
  }

  .sect3 {
    margin: 0 auto;
    background-color: #C0C0C0;
    color: #C0C0C0;
    height: 350px;
    width: 100%;
    .description3 {
      width: 600px;
      position: absolute;
      top: 850px;
      right: 15%;
      padding-top: 25px;
    }
    &:hover {
      background-color: #0B6FE1;
      color: white;
      transition: 0.3s ease-in;
    }
    img {
      position: absolute;
      left: 25%;
      top: 790px;  
    }
  }  
  img {
    filter: grayscale(100%);
    &:hover {
      filter: none;
      transition: .3s;
    }
  }
`;

const GraphicPage = () => {
  return (
  <GraphicContainer>
    <div>
      <section className="sect1">
        <img className='gallery' src={BadDog} alt="Bad Dog!" />
        <div className="description1">
        <h3>Bad Dog! (Photoshop)</h3>
        <p>surreal image featuring my dog tearing apart the HOLLYWOOD sign</p>
        
        </div>
      </section>
      <section className="sect2">  
        <img className='gallery' src={MTB} alt="Marshall Tyler Band logo"/>
        <div className="description2">
        <h3>Marshall Tyler.band logo (Illustrator)</h3>
        <p>my first logo design. Marshall Tyler.band is a blues/R&B cover band based in Texas. the band wanted a chrome "classic car emblem" look.</p>
        
        </div>
      </section>  
      <section className="sect3">  <img className='gallery' src={Bodegas} alt="Bodegas Terras Gauda ad"/>
        <div className="description3">
        <h3>Bodegas Terras Gauda (Illustrator/Photoshop)</h3>
        <p>an advertisement based on the whimsical animation style of Bodegas Terras Gauda wine ads</p>
        
        </div>      
      </section>
    </div>
   </GraphicContainer>
  )
}

export default GraphicPage
