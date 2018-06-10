import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';

  // background-color: #005B7D;


const CommunicateContainer = styled.div`
  background-color: #DB5665;
      z-index: 0;
  div {
    margin: 0 auto;
    max-width: 1200px;
    min-height: 1000px;
  }
  form {
    float: left;
  }
  img {
    float: right;
  }
`

const CommunicatePage = () => {
  return (
  <CommunicateContainer>
    <div>
    <h1>communicate</h1>
    
    <form name="communicate" method="POST" action="/" netlify>
      <p>
        <label>Business Name: <input type="text" name="name" /></label>   
      </p>
      <p>
        <label>Business Email: <input type="email" name="email" /></label>
      </p>
      {/* <p>
        <label>Your Role: 
        <select name="role[]" multiple>
          <option value="leader">Leader</option>
          <option value="follower">Follower</option>
        </select></label>
      </p> */}
      <p>
        <label>Message: <textarea name="message"></textarea></label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>

</div>
  </CommunicateContainer>
)
}

export default CommunicatePage
