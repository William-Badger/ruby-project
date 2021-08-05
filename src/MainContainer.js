import React from 'react';
import GameChoices from "./GameChoices";
import { useState } from 'react';


const MainContainer = ({currentUser, updateUser}) => {

  const [atHome, setAtHome] = useState(false);

    const logout = () => {
      window.location.href="/"
     }

     const home = () => {
       window.location.href="/game"
     }

    return (
        <div id="main-container">
    <div id="menu-bar" class="ui secondary pointing menu">
  <a class="item" 
  onClick={home}
  >
    {atHome ? "Home" : "Quit"}
  </a>
  <div class="right menu">
    <a class="ui item" onClick={logout}>
      New Game
    </a>
  </div>
</div>
<div id="game-area">
<GameChoices
setAtHome={setAtHome}
atHome ={atHome}
currentUser={currentUser}
updateUser={updateUser}
/>
</div>
</div>
    );
}

export default MainContainer;
