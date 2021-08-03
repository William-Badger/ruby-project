import React from 'react';
import Leaderboard from "./Leaderboard";

const GameChoices = () => {
    return (
        <div className="game">
            <div id="difficulty" class="ui black three item inverted menu">
  <a class="active item">
    Easy
  </a>
  <a class="item">
    Medium
  </a>
  <a class="item">
    Impossible
  </a>
</div>
    <Leaderboard />
</div>
    );
}

export default GameChoices;
