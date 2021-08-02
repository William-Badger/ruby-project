import React from 'react';
import Leaderboard from './Leaderboard';
import Game from './Game';
import { useState } from 'react';

const MainContainer = () => {

    const [isGame, setGame] = useState(false);

    function toLeaderboard() {
        setGame(false)
    }

    function toGame() {
        setGame(true)
    }

    const logout = () => {
      window.location.href="/"
     }

    return (
        <div>
    <div class="ui secondary pointing menu">
  <a 
   onClick = {toLeaderboard}
  class="item">
    Leaderboards
  </a>
  <a 
   onClick = {toGame}
  class="item">
    Game
  </a>
  <div class="right menu">
    <a class="ui item" onClick={logout}>
      Logout
    </a>
  </div>
</div>
<div className="ui segment">
    {!isGame ? <Leaderboard /> : <Game />}
</div>
        </div>
    );
}

export default MainContainer;
