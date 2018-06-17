import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import Iwata from '../images/happy-birthday-iwata.png';
import Bodegas from '../images/btg-poster.png';
import MTB from '../images/marshall-tyler-band.jpg';

const GraphicContainer = styled.div`
  @media only screen and (min-width: 531px) {
    .sect1 {
      margin: 0 auto;
      background-color: #808080;
      color: gray;
      height: 350px;
      width: 100%;
      .description1 {
        width: 25%;
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
        
      }
    }
    .sect2 {
    margin: 0 auto;
    background-color: #404040;
    color: #404040;
    height: 350px;
    width: 100%;
    .description2 {
      width: 25%;
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
      width: 25%;
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
}

  @media only screen and (max-width: 530px) {
    .sect1 {
      margin: 0 auto;
      padding-bottom: 10px;
      background-color: #808080;
      color: gray;
      height: auto;
      width: 100%;
      .description1 {
        text-align: center;
        width: 80%;
        margin: 0 auto;
        padding-top: 175px;
      }
      &:hover {
        background-color: #0093CA;
        color: white;
        transition: .3s ease-in;
      }
      img {
        width: 80%;
        height: auto;
        margin-top: 50px;
        position: absolute;
        right: 50%;
        transform: translateX(50%);
      }
    }
    .sect2 {
    margin: 0 auto;
    background-color: #404040;
    color: #404040;
    height: auto;
    width: 100%;
    .description2 {
      width: 25%;
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
        width: 80%;
        height: auto;
        position: absolute;
        right: 50%;
        transform: translateX(50%);
      }
  }

  .sect3 {
    margin: 0 auto;
    background-color: #C0C0C0;
    color: #C0C0C0;
    height: 30
    0px;
    width: 100%;
    .description3 {
      width: 25%;
      position: absolute;
      top: 850px;
      right: 15%;
      padding-top: 25px;
    }
    img {
      width: 80%;
      height: auto;
      position: absolute;
      ${'' /* right: 50%; */}
      transform: translateX(-20%);
    }
  }
}
  ${'' /* end media query */}
`;

const GraphicPage = () => {
  return (
  <GraphicContainer>
    <div>
      <section className="sect1">
        <img  src={Iwata} alt="Bad Dog!" />
        <div className="description1">
        <h3>Happy Birthday, Iwata-san!</h3>
        <p>Google Doodle celebrating the 58th birthday of Satoru Iwata, former president of Nintendo, Inc</p>
        </div>
      </section>
      <section className="sect2">  
        <img  src={MTB} alt="Marshall Tyler Band logo"/>
        <div className="description2">
        <h3>Marshall Tyler.band logo (Illustrator)</h3>
        <p>my first logo design. Marshall Tyler.band is a blues/R&B cover band based in Texas. the band wanted a chrome "classic car emblem" look.</p>
        
        </div>
      </section>  
      <section className="sect3">  <img src={Bodegas} alt="Bodegas Terras Gauda ad"/>
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
