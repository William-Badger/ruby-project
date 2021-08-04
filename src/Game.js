import React from 'react';

const Game = ({difficulty}) => {
    // fetch(`http://localhost:9292/games/${difficulty}`)
    // .then(res => res.json())
    // .then(data => data)

    return (
        <div id="game_background">
            <img id="easy" src="https://media.sketchfab.com/models/c7bda986ea5f4b8399289c076465f64f/thumbnails/691843d98d1744a696da94351cf7e887/1024x576.jpeg"></img>
            <img id="medium" src="https://i.pinimg.com/originals/b6/d1/f0/b6d1f08cc854aaa7ec171fcc744da7eb.png"></img>
            <img id="hard" src="https://assetstorev1-prd-cdn.unity3d.com/key-image/936640d6-a60c-41e0-a4a4-5838b470b784.png"></img>
        </div>
    );
}

export default Game;
