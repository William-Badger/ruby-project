import React, {useState} from 'react';

const Riddle = ({difficulty, currentUser, first, second, third, updateUser}) => {
    const [numRiddle, setNumRiddle] = useState('first')
    const [answer, setAnswer] = useState('')
    const [points, setPoints] = useState(0)

    const toSecond = (e) => {
        e.preventDefault()
        setNumRiddle('second')
        if(answer.toLowerCase() === first.answer.toLowerCase()){ 
        setPoints(points+1)
        console.log('correct')
        console.log(points)
    }
    }

      const toThird = (e) => {
        e.preventDefault()
        setNumRiddle('third')
        if(answer.toLowerCase() === second.answer.toLowerCase()){ 
        setPoints(points+1)}
    }

    const endGame = (e) => {
        e.preventDefault()
        if(answer.toLowerCase() === third.answer.toLowerCase()){ 
        setPoints(points+1)}

        fetch(`http://localhost:9292/users/${currentUser.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: currentUser.username,
        highscore: points
      }),
    })
      .then((r) => r.json())
      .then((updatedUser) => updateUser(updatedUser));
  }

    if(difficulty === 'easy'){
        return (
        <div>
           {numRiddle === 'first' ?
            <div id="easy-mode" class="image">
            <img id="easy" src="https://media.sketchfab.com/models/c7bda986ea5f4b8399289c076465f64f/thumbnails/691843d98d1744a696da94351cf7e887/1024x576.jpeg"></img>
            <h2><span>{first.question}</span></h2>
            <form onSubmit={toSecond}>
                <div class="ui inverted segment">
                    <div class="ui inverted form">
                        <div class="one field">
                            <div class="field">
            <input type="text" name="answer" value={answer} onChange={(e) => setAnswer(e.target.value)} placeholder="What Do You Think?" required/>
                            </div>
            <button type="submit" class="ui submit button">Final Answer</button>
                        </div> 
                    </div>
                </div>
            </form>
            <form onSubmit={toSecond} >
            <button type="submit" class="ui submit button">I Give Up</button>
            </form>
            </div>
                : null
                }

            {numRiddle === 'second' ?
                <div id="easy-mode" class="image">
                <img id="easy" src="https://media.sketchfab.com/models/c7bda986ea5f4b8399289c076465f64f/thumbnails/691843d98d1744a696da94351cf7e887/1024x576.jpeg"></img>
                <h2><span>{second.question}</span></h2>
                <form onSubmit={toThird}>
                    <div class="ui inverted segment">
                        <div class="ui inverted form">
                            <div class="one field">
                                <div class="field">
                <input type="text" name="answer" value={answer} onChange={(e) => setAnswer(e.target.value)} placeholder="What Do You Think?" required/>
                                </div>
                <button type="submit" class="ui submit button">Final Answer</button>
                            </div>
                        </div>
                    </div>
                </form>
                <form onSubmit={toThird} >
            <button type="submit" class="ui submit button">I Give Up</button>
            </form>
                </div>
                    : null
                }

                {numRiddle === 'third' ?
                <div id="easy-mode" class="image">
                <img id="easy" src="https://media.sketchfab.com/models/c7bda986ea5f4b8399289c076465f64f/thumbnails/691843d98d1744a696da94351cf7e887/1024x576.jpeg"></img>
                <h2><span>{third.question}</span></h2>
                <form onSubmit={endGame}>
                    <div class="ui inverted segment">
                        <div class="ui inverted form">
                            <div class="one field">
                                <div class="field">
                <input type="text" name="answer" value={answer} onChange={(e) => setAnswer(e.target.value)} placeholder="What Do You Think?" required/>
                                </div>
                <button type="submit" class="ui submit button">Final Answer</button>
                            </div>
                        </div>
                    </div>
            </form>
            <form onSubmit={endGame} >
            <button type="submit" class="ui submit button">I Give Up</button>
            </form>
            </div>
                : null
                }
        </div>
        );
    } else if(difficulty === 'medium') {
        return (
            <div>
           {numRiddle === 'first' ?
            <div id="medium-mode" class="image">
            <img id="medium" src="https://i.pinimg.com/originals/b6/d1/f0/b6d1f08cc854aaa7ec171fcc744da7eb.png"></img>
            <h2><span>{first.question}</span></h2>
            <form onSubmit={toSecond}>
                <div class="ui inverted segment">
                    <div class="ui inverted form">
                        <div class="one field">
                            <div class="field">
            <input type="text" name="answer" placeholder="What Do You Think?" required/>
                            </div>
            <button type="submit" class="ui submit button">Final Answer</button>
                        </div> 
                    </div>
                </div>
            </form>
            <form onSubmit={toSecond} >
            <button type="submit" class="ui submit button">I Give Up</button>
            </form>
            </div>
                : null
                }

            {numRiddle === 'second' ?
                <div id="medium-mode" class="image">
                <img id="medium" src="https://i.pinimg.com/originals/b6/d1/f0/b6d1f08cc854aaa7ec171fcc744da7eb.png"></img>
                <h2><span>{second.question}</span></h2>
                <form onSubmit={toThird}>
                    <div class="ui inverted segment">
                        <div class="ui inverted form">
                            <div class="one field">
                                <div class="field">
                <input type="text" name="answer" placeholder="What Do You Think?" required/>
                                </div>
                <button type="submit" class="ui submit button">Final Answer</button>
                            </div>
                        </div>
                    </div>
                </form>
                <form onSubmit={toThird} >
            <button type="submit" class="ui submit button">I Give Up</button>
            </form>
                </div>
                    : null
                }

                {numRiddle === 'third' ?
                <div id="medium-mode" class="image">
                <img id="medium" src="https://i.pinimg.com/originals/b6/d1/f0/b6d1f08cc854aaa7ec171fcc744da7eb.png"></img>
                <h2><span>{third.question}</span></h2>
                <form onSubmit={endGame}>
                    <div class="ui inverted segment">
                        <div class="ui inverted form">
                            <div class="one field">
                                <div class="field">
                <input type="text" name="answer" placeholder="What Do You Think?" required/>
                                </div>
                <button type="submit" class="ui submit button">Final Answer</button>
                            </div>
                        </div>
                    </div>
            </form>
            <form onSubmit={endGame} >
            <button type="submit" class="ui submit button">I Give Up</button>
            </form>
            </div>
                : null
                }
        </div>
        )
    } else if(difficulty === 'hard') {
        return (
             <div>
           {numRiddle === 'first' ?
            <div id="hard-mode" class="image">
            <img id="hard" src="https://assetstorev1-prd-cdn.unity3d.com/key-image/936640d6-a60c-41e0-a4a4-5838b470b784.png"></img>
            <h2><span>{first.question}</span></h2>
            <form onSubmit={toSecond}>
                <div class="ui inverted segment">
                    <div class="ui inverted form">
                        <div class="one field">
                            <div class="field">
            <input type="text" name="answer" placeholder="What Do You Think?" required/>
                            </div>
            <button type="submit" class="ui submit button">Final Answer</button>
                        </div> 
                    </div>
                </div>
            </form>
            <form onSubmit={toSecond} >
            <button type="submit" class="ui submit button">I Give Up</button>
            </form>
            </div>
                : null
                }

            {numRiddle === 'second' ?
                <div id="hard-mode" class="image">
                <img id="hard" src="https://assetstorev1-prd-cdn.unity3d.com/key-image/936640d6-a60c-41e0-a4a4-5838b470b784.png"></img>
                <h2><span>{second.question}</span></h2>
                <form onSubmit={toThird}>
                    <div class="ui inverted segment">
                        <div class="ui inverted form">
                            <div class="one field">
                                <div class="field">
                <input type="text" name="answer" placeholder="What Do You Think?" required/>
                                </div>
                <button type="submit" class="ui submit button">Final Answer</button>
                            </div>
                        </div>
                    </div>
                </form>
                <form onSubmit={toThird} >
            <button type="submit" class="ui submit button">I Give Up</button>
            </form>
                </div>
                    : null
                }

                {numRiddle === 'third' ?
                <div id="hard-mode" class="image">
                <img id="hard" src="https://assetstorev1-prd-cdn.unity3d.com/key-image/936640d6-a60c-41e0-a4a4-5838b470b784.png"></img>
                <h2><span>{third.question}</span></h2>
                <form onSubmit={endGame}>
                    <div class="ui inverted segment">
                        <div class="ui inverted form">
                            <div class="one field">
                                <div class="field">
                <input type="text" name="answer" placeholder="What Do You Think?" required/>
                                </div>
                <button type="submit" class="ui submit button">Final Answer</button>
                            </div>
                        </div>
                    </div>
            </form>
            <form onSubmit={endGame} >
            <button type="submit" class="ui submit button">I Give Up</button>
            </form>
            </div>
                : null
                }
        </div>
        )
    } 
}

export default Riddle
