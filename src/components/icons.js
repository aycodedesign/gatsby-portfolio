import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";


const IconContainer = styled.div`

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

p {
  font-size: 1rem;
}
`

const Icons = () => {
  return (
    <div>
      <IconContainer>
        <a href="http://linkedin.com"><i className="fab fa-linkedin" /></a>
        <a href="http://instagram.com"><i className="fab fa-instagram" /></a>
        <a href="http://github.com/el3ctricsol"><i className="fab fa-github" /></a>
        <a href="mailto:aubrey.ky.young@gmail.com"><i className="fab fa-google-plus" /></a>
      </IconContainer>
    </div>
  )
}

export default Icons