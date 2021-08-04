import React from 'react';
import Leaderboard from "./Leaderboard";
import { useState } from 'react';
import Game from './Game';

const GameChoices = () => {

  const [difficulty, setDifficulty] = useState('');

    return (
        <div className="game">
            <div id="choices-bar" class="ui black three item inverted menu">
  <a class="item"
  onClick={() => setDifficulty('easy')}
  >
    Easy
  </a>
  <a class="item"
  onClick={() => setDifficulty('medium')}
  >
    Medium
  </a>
  <a class="item"
  onClick={() => setDifficulty('hard')}
  >
    Hard
  </a>
</div>
      <Game 
      difficulty={difficulty}
      />
    <Leaderboard />
</div>
    );
  
}

export default GameChoices;
