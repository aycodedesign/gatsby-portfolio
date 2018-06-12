import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";


const IconContainer = styled.div`
z-index: 2;
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
.fa-envelope { 
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
        <Link to="/resume/" target="_blank"><h2>RESUME</h2></Link>
        <a href="mailto:aubrey.ky.young@gmail.com?subject=Let's chat!"><i className="fas fa-envelope"></i></a>
        <a href="https://www.linkedin.com/in/aubreykyyoung/" target="blank"><i className="fab fa-linkedin" /></a>
        <a href="http://instagram.com/el3ctricsol" target="blank"><i className="fab fa-instagram" /></a>
        <a href="https://github.com/el3ctricsol" target="_blank"><i className="fab fa-github" /></a>
      </IconContainer>
    </div>
  )
}

export default Icons