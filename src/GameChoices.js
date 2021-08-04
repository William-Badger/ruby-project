import React from 'react';
import Leaderboard from "./Leaderboard";
import Stopwatch from './Stopwatch';


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
    <Stopwatch />
    <Leaderboard />
</div>
    );
}

export default GameChoices;
