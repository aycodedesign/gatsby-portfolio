import React from 'react';
import styled from 'styled-components';

import Iwata from '../images/happy-birthday-iwata.png';
import Bodegas from '../images/btg-poster.png';
import MTB from '../images/marshall-tyler-band.jpg';

const GraphicContainer = styled.div`
  @media only screen and (min-width: 531px) {
    img {
      filter: grayscale(100%);
      &:hover {
        filter: none;
        transition: .3s;
      }
    }
    .sect1 {
      margin: 0 auto;
      background-color: #808080;
      color: gray;
      height: 250px;
      width: 100%;
      .description1 {
        width: 25%;
        position: absolute;
        top: 120px;
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
        right: 53%;
        top: 105px;  
      }
    }
    
    .sect2 {
    margin: 0 auto;
    background-color: #3A3A3A;
    color: #3A3A3A;
    height: 300px;
    width: 100%;
    .description2 {
      width: 25%;
      position: absolute;
      top: 375px;
      left: 25%;
      padding-top: 25px;
    }
    &:hover {
      background-color: #393A3C;
      color: white;
      transition: 0.3s ease-in;
    }
    img {
      position: absolute;
      left: 55%;
      top: 340px;  
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
      top: 710px;
      right: 20%;
      padding-top: 25px;
    }
    &:hover {
      background-color: #0B6FE1;
      color: white;
      transition: 0.3s ease-in;
    }
    img {
      position: absolute;
      right: 55%;
      top: 640px; 
    }
  }  
}
${'' /* end media query */}

@media only screen and (max-width: 530px) {
  h3 {font-size: 1.25rem}
  .sect1 {
    margin: 0 auto;
    padding-bottom: 10px;
    background-color: #808080;
    color: #808080;
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
  padding-bottom: 10px;
  background-color: #3A3A3A;
  color: #3A3A3A;
  height: auto;
  width: 100%;
  .description2 {
    text-align: center;
    width: 80%;
    margin: 0 auto;
    padding-top: 200px;
  }
  &:hover {
    ${'' /* background-color: #005B7D; */}
    background-color: #393A3C;
    color: white;
    transition: 0.3s ease-in;
  }
  img {
    width: 80%;
    height: auto;
    position: absolute;
    margin-top: 10px;
    right: 50%;
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
    padding-top: 275px;
  }
  &:hover {
  background-color: #0B6FE1;
  color: white;
  transition: 0.3s ease-in;
  }
  img {
    width: 80%;
    height: auto;
    margin-top: 25px;
    position: absolute;
    right: 50%;
    transform: translateX(50%);
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
        <img  src={Iwata} alt="Iwata-san" />
        <div className="description1">
        <h3>Happy Birthday, Iwata-san</h3>
        <p>Google Doodle celebrating the 58th birthday of Satoru Iwata, former president of Nintendo, Inc</p>
        </div>
      </section>
      <section className="sect2">  
        <img  src={MTB} alt="Marshall Tyler Band logo"/>
        <div className="description2">
        <h3>Marshall Tyler.band logo</h3>
        <p>my first logo design. Marshall Tyler.band is a blues/R&B cover band based in Texas. the band wanted a chrome "classic car emblem" look.</p>
        
        </div>
      </section>  
      <section className="sect3">  <img src={Bodegas} alt="Bodegas Terras Gauda ad"/>
        <div className="description3">
          <h3>Bodegas Terras Gauda</h3>
          <p>mock advertisement based on the animation style of Bodegas Terras Gauda wine ads</p>
        </div>      
      </section>
    </div>
   </GraphicContainer>
  )
}

export default GraphicPage
