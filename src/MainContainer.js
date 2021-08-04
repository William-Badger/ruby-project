import React from 'react';
import GameChoices from "./GameChoices";

const MainContainer = () => {

    const logout = () => {
      window.location.href="/"
     }

    return (
        <div>
    <div class="ui secondary pointing menu">
  <a
  class="item">
    Game
  </a>
  <div class="right menu">
    <a class="ui item" onClick={logout}>
      Logout
    </a>
  </div>
</div>
<GameChoices />
</div>
    );
}

export default MainContainer;
