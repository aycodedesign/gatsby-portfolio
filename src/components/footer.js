import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Icons from './icons.js'

const FooterContainer = styled.div`
  background-color: #555f63;
  text-align: center;
  box-shadow: 0px -2px 5px black;
  z-index: 90;
`
const Footer = () => {
  return (
    <FooterContainer>
      <Icons />
    </FooterContainer>
  )
}

export default Footer
