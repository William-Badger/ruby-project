import React from 'react';
import Leaderboard from "./Leaderboard";
import { useState } from 'react';
import Game from './Game';

const GameChoices = ({setAtHome, currentUser}) => {

  const [difficulty, setDifficulty] = useState('');
  const [riddles, setRiddles] = useState([]);

  function handleClick(difficulty) {
        fetch(`http://localhost:9292/games/${difficulty}`)
          .then((r) => r.json())
          .then((data) => console.log(data));
  }

  if(difficulty === '') {
    setAtHome(true)
  } else {
    setAtHome(false)
  }

    return (
        <div className="game">
            <div id="choices-bar" class="ui black three item inverted menu">
  <a class="item"
  onClick={() => handleClick('easy')}
  >
    Easy
  </a>
  <a class="item"
  onClick={() => handleClick('medium')}
  >
    Medium
  </a>
  <a class="item"
  onClick={() => handleClick('hard')}
  >
    Hard
  </a>
</div>
      <Game 
      difficulty={difficulty}
      currentUser={currentUser}
      />
    
</div>
    );
  
}

export default GameChoices;
