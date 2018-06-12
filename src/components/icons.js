import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import Resume from '../images/young-resume.pdf'

const IconContainer = styled.div`
  z-index: 100;

  a {
    text-decoration: none;
    h2 {
      padding-top: 10px;
      text-align: center;
      color: white;
      margin: 0px;
      font-size: 2rem;
    }
  }
  i {
    color: white;
    font-size: 2rem;
    padding: 25px;
  }
  .fa-linkedin {
    &:hover {
      color: #0097d3;
      transform: rotate(-10deg);
      transition: 0.5s;
    }
  }
  .fa-instagram {
    &:hover {
      color: #7e3ab1;
      transform: rotate(-10deg);
      transition: 0.5s;
    }
  }
  .fa-github {
    &:hover {
      color: #000000;
      transform: rotate(-10deg);
      transition: 0.5s;
    }
  }
  .fa-envelope {
    &:hover {
      color: #da4b42;
      transform: rotate(-10deg);
      transition: 0.5s;
    }
  }
`

const Icons = () => {
  return (
    <div>
      <IconContainer>
        <a href={Resume} target="_blank">
          <h2>RESUME</h2>
        </a>
        <a href="mailto:aubrey.ky.young@gmail.com?subject=Let's chat!">
          <i className="fas fa-envelope" />
        </a>
        <a href="https://www.linkedin.com/in/aubreykyyoung/" target="blank">
          <i className="fab fa-linkedin" />
        </a>
        <a href="http://instagram.com/el3ctricsol" target="blank">
          <i className="fab fa-instagram" />
        </a>
        <a href="https://github.com/el3ctricsol" target="_blank">
          <i className="fab fa-github" />
        </a>
      </IconContainer>
    </div>
  )
}

export default Icons
