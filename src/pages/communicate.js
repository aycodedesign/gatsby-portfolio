import React from 'react'
import Link from 'gatsby-link'

const CommunicatePage = () => (
  <div>
    <h1>communicate</h1>
    <p>communicate with me</p>
    
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
)

export default CommunicatePage
