import React from 'react'
import styled from 'styled-components';

  // background-color: #005B7D;


const PostersContainer = styled.div`
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

const PostersPage = () => {
  return (
  <PostersContainer>
    <div>
    <h1>posters</h1>
    
    <form name="posters" method="POST" action="/" netlify>
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
  </PostersContainer>
)
}

export default PostersPage
