import React from 'react';
import GameChoices from "./GameChoices";


const MainContainer = () => {

    const logout = () => {
      window.location.href="/"
     }

     const home = () => {
       window.location.href="/game"
     }

    return (
        <div id="main-container">
    <div id="menu-bar" class="ui secondary pointing menu">
  <a class="item" onClick={home}>
    Home
  </a>
  <div class="right menu">
    <a class="ui item" onClick={logout}>
      Logout
    </a>
  </div>
</div>
<GameChoices 
/>
</div>
    );
}

export default MainContainer;
