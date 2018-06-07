import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";


const IconContainer = styled.div`

  h2 {
    padding-top: 10px;
    text-align: center;
    color: white;
    margin: 0px;
  }
i {
  color: white;
  font-size: 2rem;
  padding: 25px;
}
  .fa-linkedin { 
    &:hover {
      color: #0097D3;
      transform: rotate(-10deg);
      transition: .5s;
    }
  }
  .fa-instagram { 
    &:hover {
      color: #7E3AB1;
      transform: rotate(-10deg);
      transition: .5s;
    }
  }
  .fa-github { 
    &:hover {
      color: #000000;
      transform: rotate(-10deg);
      transition: .5s;
    }
  }
  .fa-google-plus { 
    &:hover {
      color: #da4b42;
      transform: rotate(-10deg);
      transition: .5s;
    }
  }


`

const Icons = () => {
  return (
    <div>

      <IconContainer>
              
                  <h2>communicate with me here :</h2>

        <a href="https://www.linkedin.com/in/aubreykyyoung/" target="blank"><i className="fab fa-linkedin" /></a>
        <a href="http://instagram.com/el3ctricsol" target="blank"><i className="fab fa-instagram" /></a>
        <a href="https://github.com/el3ctricsol" target="_blank"><i className="fab fa-github" /></a>
        <a href="mailto:aubrey.ky.young@gmail.com?subject=I dig what you do!"><i className="fab fa-google-plus" /></a>
      </IconContainer>
    </div>
  )
}

export default Icons