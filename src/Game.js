import React from 'react';
import Leaderboard from "./Leaderboard"
import Riddle from "./Riddle"

const Game = ({difficulty, currentUser, first, second, third, updateUser}) => {

    if(difficulty !== ''){
        return(
            <div>
                <div>
        <Riddle difficulty={difficulty} currentUser={currentUser} first={first} second={second} third={third} updateUser={updateUser}/>
        </div>
        </div>
        )
    }else{
        return(
            <div>
                <Leaderboard />
            </div>
        )
    }
}

export default Game;
