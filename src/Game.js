import React, {useEffect, useState} from 'react';
import Leaderboard from "./Leaderboard"
import Riddle from "./Riddle"

const Game = ({difficulty, currentUser}) => {


    if(difficulty === 'easy'){
        return (
            <div>
                <Riddle difficulty={difficulty}/>
        <div id="easy-mode" className="game_background">
            <img id="easy" src="https://media.sketchfab.com/models/c7bda986ea5f4b8399289c076465f64f/thumbnails/691843d98d1744a696da94351cf7e887/1024x576.jpeg"></img>
        </div>
        </div>
        );
    } else if(difficulty === 'medium') {
        return (
            <div>
            <Riddle difficulty={difficulty}/>
        <div id="medium-mode" className="game_background">
            <img id="medium" src="https://i.pinimg.com/originals/b6/d1/f0/b6d1f08cc854aaa7ec171fcc744da7eb.png"></img>
        </div>
        </div>
        )
    } else if(difficulty === 'hard') {
        return (
            <div>
                <Riddle difficulty={difficulty}/>
        <div id="hard-mode" className="game_background">
            <img id="hard" src="https://assetstorev1-prd-cdn.unity3d.com/key-image/936640d6-a60c-41e0-a4a4-5838b470b784.png"></img>
        </div>
        </div>
        )
    } else if(difficulty === '') {
        return(
        <div>
            <Leaderboard />
        </div>
        
        )
    }
}

export default Game;
