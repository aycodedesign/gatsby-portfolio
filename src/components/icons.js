import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";


const IconContainer = styled.div`

i {
  color: white;
  font-size: 2rem;
  padding: 25px;
}

p {
  font-size: 2rem;
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