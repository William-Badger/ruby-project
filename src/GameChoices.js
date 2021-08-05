import React from 'react';
import { useState } from 'react';
import Game from './Game';

const GameChoices = ({setAtHome, currentUser, atHome, updateUser}) => {

  const [difficulty, setDifficulty] = useState('');
  const [riddles, setRiddles] = useState([]);
  const [first, setFirst] = useState([]);
  const [second, setSecond] = useState([]);
  const [third, setThird] = useState([])

  function handleClick(difficulty) {
    setDifficulty(difficulty)
        fetch(`http://localhost:9292/games/${difficulty}`)
          .then((r) => r.json())
          .then((data) => {
            setRiddles(data);
            setFirst(data[0])
            setSecond(data[1])
            setThird(data[2])
          });       
  }

  if(difficulty === '') {
    setAtHome(true)
  } else {
    setAtHome(false)
  }

  
    return (
        <div className="game">
          { atHome ?
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
:
<>
</>
}
      <Game 
      difficulty={difficulty}
      currentUser={currentUser}
      first={first}
      second={second}
      third={third}
      updateUser={updateUser}
      />
</div>
    );
  
}

export default GameChoices;
