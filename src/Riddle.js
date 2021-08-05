import React, {useState} from 'react';

const Riddle = ({difficulty, currentUser, first, second, third, updateUser}) => {
    const [numRiddle, setNumRiddle] = useState('firstQ')
    const [answer, setAnswer] = useState('')
    const [points, setPoints] = useState(0)

    const toFirstA = (e) => {
        e.preventDefault()
        setNumRiddle('firstA')
        if(answer.toLowerCase() === first.answer.toLowerCase()){ 
        setPoints(points+1)
    }}

    const toSecondQ = (e) => {
        e.preventDefault()
        setNumRiddle('secondQ')
    }

    const toSecondA = (e) => {
        e.preventDefault()
        setNumRiddle('secondA')
        if(answer.toLowerCase() === second.answer.toLowerCase()){ 
        setPoints(points+1)}
    }

      const toThirdQ = (e) => {
        e.preventDefault()
        setNumRiddle('thirdQ')
    }

    const toThirdA = (e) => {
        e.preventDefault()
        setNumRiddle('thirdA')
        if(answer.toLowerCase() === third.answer.toLowerCase()){ 
        setPoints(points+1)}
    }

    const endGame = (e) => {
        e.preventDefault()
        setNumRiddle('done')

    //     fetch(`http://localhost:9292/users/${currentUser.id}`, {
    //   method: "PATCH",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     username: currentUser.username,
    //     highscore: points
    //   }),
    // })
    //   .then((r) => r.json())
    //   .then((updatedUser) => updateUser(updatedUser));
  }

  const exitGame = (e) => {
      e.preventDefault()
      window.location.href="/Game"
  }

    if(difficulty === 'easy'){
        return (
        <div>
           {numRiddle === 'firstQ' ?
            <div id="easy-mode" class="image">
            <img id="easy" src="https://media.sketchfab.com/models/c7bda986ea5f4b8399289c076465f64f/thumbnails/691843d98d1744a696da94351cf7e887/1024x576.jpeg" alt="img"></img>
            <h2><span>{first.question}</span></h2>
            <form onSubmit={toFirstA}>
                <div class="ui inverted segment">
                    <div class="ui inverted form">
                        <div class="one field">
                            <div class="field">
            <input class="answer" type="text" name="answer" value={answer} onChange={(e) => setAnswer(e.target.value)} placeholder="What Do You Think?" required/>
                            </div>
            <button type="submit" class="ui submit button">Final Answer</button>
                        </div> 
                    </div>
                </div>
            </form>
            <form onSubmit={toFirstA} >
            <button type="submit" class="ui submit button">I Give Up</button>
            </form>
            </div>
                : null
                }

{numRiddle === 'firstA' ?
                <div id="easy-mode" class="image">
                <img id="easy" src="https://media.sketchfab.com/models/c7bda986ea5f4b8399289c076465f64f/thumbnails/691843d98d1744a696da94351cf7e887/1024x576.jpeg" alt="img"></img>
                <h2><span>{first.answer}</span></h2>
                <form onSubmit={toSecondQ} >
            <button type="submit" class="ui submit button">Next Riddle</button>
            </form>
                </div>
                    : null
                }

            {numRiddle === 'secondQ' ?
                <div id="easy-mode" class="image">
                <img id="easy" src="https://media.sketchfab.com/models/c7bda986ea5f4b8399289c076465f64f/thumbnails/691843d98d1744a696da94351cf7e887/1024x576.jpeg" alt="img"></img>
                <h2><span>{second.question}</span></h2>
                <form onSubmit={toSecondA}>
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
                <form onSubmit={toSecondA} >
            <button type="submit" class="ui submit button">I Give Up</button>
            </form>
                </div>
                    : null
                }


{numRiddle === 'secondA' ?
                <div id="easy-mode" class="image">
                <img id="easy" src="https://media.sketchfab.com/models/c7bda986ea5f4b8399289c076465f64f/thumbnails/691843d98d1744a696da94351cf7e887/1024x576.jpeg" alt="img"></img>
                <h2><span>{second.answer}</span></h2>
                <form onSubmit={toThirdQ} >
            <button type="submit" class="ui submit button">Next Riddle</button>
            </form>
                </div>
                    : null
                }

                {numRiddle === 'thirdQ' ?
                <div id="easy-mode" class="image">
                <img id="easy" src="https://media.sketchfab.com/models/c7bda986ea5f4b8399289c076465f64f/thumbnails/691843d98d1744a696da94351cf7e887/1024x576.jpeg" alt="img"></img>
                <h2><span>{third.question}</span></h2>
                <form onSubmit={toThirdA}>
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
            <form onSubmit={toThirdA} >
            <button type="submit" class="ui submit button">I Give Up</button>
            </form>
            </div>
                : null
                }
                {numRiddle === 'thirdA' ?
                <div id="easy-mode" class="image">
                <img id="easy" src="https://media.sketchfab.com/models/c7bda986ea5f4b8399289c076465f64f/thumbnails/691843d98d1744a696da94351cf7e887/1024x576.jpeg" alt="img"></img>
                <h2><span>{third.answer}</span></h2>
                <form onSubmit={endGame} >
            <button type="submit" class="ui submit button">Done!</button>
            </form>
                </div>
                    : null
                }

{numRiddle === 'done' ?
                <div id="easy-mode" class="image">
                <img id="easy" src="https://media.sketchfab.com/models/c7bda986ea5f4b8399289c076465f64f/thumbnails/691843d98d1744a696da94351cf7e887/1024x576.jpeg" alt="img"></img>
                <h2><span>Your Score: {points} Points</span></h2>
                <form onSubmit={exitGame} >
            <button type="submit" class="ui submit button">Exit Game</button>
            </form>
                </div>
                    : null
                }
        </div>
        );
    } else if(difficulty === 'medium') {
        return (
            <div>
           {numRiddle === 'firstQ' ?
            <div id="medium-mode" class="image">
            <img id="medium" src="https://i.pinimg.com/originals/b6/d1/f0/b6d1f08cc854aaa7ec171fcc744da7eb.png" alt="img"></img>
            <h2><span>{first.question}</span></h2>
            <form onSubmit={toFirstA}>
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
            <form onSubmit={toFirstA} >
            <button type="submit" class="ui submit button">I Give Up</button>
            </form>
            </div>
                : null
                }

{numRiddle === 'firstA' ?
            <div id="medium-mode" class="image">
            <img id="medium" src="https://i.pinimg.com/originals/b6/d1/f0/b6d1f08cc854aaa7ec171fcc744da7eb.png" alt="img"></img>
            <h2><span>{first.Answer}</span></h2>
            <form onSubmit={toSecondQ} >
            <button type="submit" class="ui submit button">Next Riddle</button>
            </form>
            </div>
                : null
                }
                

            {numRiddle === 'secondQ' ?
                <div id="medium-mode" class="image">
                <img id="medium" src="https://i.pinimg.com/originals/b6/d1/f0/b6d1f08cc854aaa7ec171fcc744da7eb.png" alt="img"></img>
                <h2><span>{second.question}</span></h2>
                <form onSubmit={toSecondA}>
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
                <form onSubmit={toSecondA} >
            <button type="submit" class="ui submit button">I Give Up</button>
            </form>
                </div>
                    : null
                }


{numRiddle === 'secondA' ?
            <div id="medium-mode" class="image">
            <img id="medium" src="https://i.pinimg.com/originals/b6/d1/f0/b6d1f08cc854aaa7ec171fcc744da7eb.png" alt="img"></img>
            <h2><span>{second.Answer}</span></h2>
            <form onSubmit={toThirdQ} >
            <button type="submit" class="ui submit button">Next Riddle</button>
            </form>
            </div>
                : null
                }
                

                {numRiddle === 'thirdQ' ?
                <div id="medium-mode" class="image">
                <img id="medium" src="https://i.pinimg.com/originals/b6/d1/f0/b6d1f08cc854aaa7ec171fcc744da7eb.png" alt="img"></img>
                <h2><span>{third.question}</span></h2>
                <form onSubmit={toThirdA}>
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
            <form onSubmit={toThirdA} >
            <button type="submit" class="ui submit button">I Give Up</button>
            </form>
            </div>
                : null
                }


{numRiddle === 'thirdA' ?
            <div id="medium-mode" class="image">
            <img id="medium" src="https://i.pinimg.com/originals/b6/d1/f0/b6d1f08cc854aaa7ec171fcc744da7eb.png" alt="img"></img>
            <h2><span>{third.Answer}</span></h2>
            <form onSubmit={endGame} >
            <button type="submit" class="ui submit button">Done!</button>
            </form>
            </div>
                : null
                }


{numRiddle === 'done' ?
                <div id="medium-mode" class="image">
                <img id="medium" src="https://i.pinimg.com/originals/b6/d1/f0/b6d1f08cc854aaa7ec171fcc744da7eb.png" alt="img"></img>
                <h2><span>Your Score: {points} Points</span></h2>
                <form onSubmit={exitGame} >
            <button type="submit" class="ui submit button">Exit Game</button>
            </form>
                </div>
                    : null
                }
                
        </div>
        )
    } else if(difficulty === 'hard') {
        return (
             <div>
           {numRiddle === 'firstQ' ?
            <div id="hard-mode" class="image">
            <img id="hard" src="https://assetstorev1-prd-cdn.unity3d.com/key-image/936640d6-a60c-41e0-a4a4-5838b470b784.png" alt="img"></img>
            <h2><span>{first.question}</span></h2>
            <form onSubmit={toFirstA}>
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
            <form onSubmit={toFirstA} >
            <button type="submit" class="ui submit button">I Give Up</button>
            </form>
            </div>
                : null
                }


           {numRiddle === 'firstA' ?
            <div id="hard-mode" class="image">
            <img id="hard" src="https://assetstorev1-prd-cdn.unity3d.com/key-image/936640d6-a60c-41e0-a4a4-5838b470b784.png" alt="img"></img>
            <h2><span>{first.Answer}</span></h2>
            <form onSubmit={toSecondQ} >
            <button type="submit" class="ui submit button">Next Riddle</button>
            </form>
            </div>
                : null
                }

            {numRiddle === 'secondQ' ?
                <div id="hard-mode" class="image">
                <img id="hard" src="https://assetstorev1-prd-cdn.unity3d.com/key-image/936640d6-a60c-41e0-a4a4-5838b470b784.png" alt="img"></img>
                <h2><span>{second.question}</span></h2>
                <form onSubmit={toSecondA}>
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
                <form onSubmit={toSecondA} >
            <button type="submit" class="ui submit button">I Give Up</button>
            </form>
                </div>
                    : null
                }

{numRiddle === 'secondA' ?
            <div id="hard-mode" class="image">
            <img id="hard" src="https://assetstorev1-prd-cdn.unity3d.com/key-image/936640d6-a60c-41e0-a4a4-5838b470b784.png" alt="img"></img>
            <h2><span>{second.Answer}</span></h2>
            <form onSubmit={toThirdQ} >
            <button type="submit" class="ui submit button">Next Riddle</button>
            </form>
            </div>
                : null
                }

                {numRiddle === 'thirdQ' ?
                <div id="hard-mode" class="image">
                <img id="hard" src="https://assetstorev1-prd-cdn.unity3d.com/key-image/936640d6-a60c-41e0-a4a4-5838b470b784.png" alt="img"></img>
                <h2><span>{third.question}</span></h2>
                <form onSubmit={toThirdA}>
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
            <form onSubmit={toThirdA} >
            <button type="submit" class="ui submit button">I Give Up</button>
            </form>
            </div>
                : null
                }

{numRiddle === 'thirdA' ?
            <div id="hard-mode" class="image">
            <img id="hard" src="https://assetstorev1-prd-cdn.unity3d.com/key-image/936640d6-a60c-41e0-a4a4-5838b470b784.png" alt="img"></img>
            <h2><span>{third.Answer}</span></h2>
            <form onSubmit={endGame} >
            <button type="submit" class="ui submit button">Done!</button>
            </form>
            </div>
                : null
                }

{numRiddle === 'done' ?
                <div id="hard-mode" class="image">
                <img id="hard" src="https://assetstorev1-prd-cdn.unity3d.com/key-image/936640d6-a60c-41e0-a4a4-5838b470b784.png" alt="img"></img>
                <h2><span>Your Score: {points} Points</span></h2>
                <form onSubmit={exitGame} >
            <button type="submit" class="ui submit button">Exit Game</button>
            </form>
                </div>
                    : null
                }
        </div>
        )
    } 
}

export default Riddle
