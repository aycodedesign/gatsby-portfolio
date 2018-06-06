import React from 'react';
import Link from 'gatsby-link';
import drinkOn from '../images/drink-on.png';
import jsExercise from '../images/js-exercise.png';


// const WebAppContainer = styled.div`
//   img {
//     display: inline-block;
//   }
// `;

const WebAppPage = () => (
  <div>
    <h1>web & app</h1>
    <p>check out my websites and applications</p>
    {/* <WebAppContainer> */}
      <img src={drinkOn} alt="Drink-On App" />
      <img src={jsExercise} alt="JavaScript website" />
    {/* </WebAppContainer> */}
  </div>
)

export default WebAppPage
