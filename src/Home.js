import React, {useState} from 'react';

const Home = ({users, setUsers, currentUser, setCurrentUser, setTheUser}) => {
  const [isActive, setActive] = useState("True");
  const [newUsername, setNewUsername] = useState("")

  function addUser(newUser) {
    setUsers([...users, newUser]);
  }

  const ToggleClass = () => {
    setActive(!isActive); 
   };

   const startGame = (e) => {
     e.preventDefault();
    window.location.href="/Game"

    fetch("http://localhost:9292/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: newUsername,
        highscore: 0
      }),
    })
      .then((r) => r.json())
      .then((newUser) => {
        addUser(newUser);
        setCurrentUser(newUser);
      });
   }

    return (
        <div>
        <div class="ui secondary pointing menu">
  <a class={isActive ? "active item" : "item"} onClick={ToggleClass}>
    Login
  </a>
  <a class={!isActive ? "active item" : "item"} onClick={ToggleClass}>
    Sign Up
  </a>
</div>

<form onSubmit={startGame}>
<div class="ui inverted segment">
  <div class="ui inverted form">
    <div class="one field">
      <div class="field">
        <input type="text" name="newUsername" value={newUsername} onChange={(e) => setNewUsername(e.target.value)} placeholder={isActive ? "Username" : "Create Username"} required/>
      </div>
      <button type="submit" class="ui submit button">Let's Play!</button>
    </div>
    
  </div>
</div>
</form>

</div>
           
    );
}

export default Home;
