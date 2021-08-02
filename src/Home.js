import React from 'react';

const Home = () => {
    return (
        <div>
        <div class="ui secondary pointing menu">
  <a class="active item">
    Login
  </a>
  <a class="item">
    Sign Up
  </a>
</div>

<div class="ui inverted segment">
  <div class="ui inverted form">
    <div class="one field">
      <div class="field">
        <input placeholder="Username" type="text"></input>
      </div>
      <div class="ui submit button">Submit</div>
    </div>
    
  </div>
</div>
</div>
           
    );
}

export default Home;
