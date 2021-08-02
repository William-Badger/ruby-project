import React, {useState} from 'react';

const Home = () => {
  const [isActive, setActive] = useState("True");

  const ToggleClass = () => {
    setActive(!isActive); 
   };

   const startGame = (e) => {
     e.preventDefault();
    window.location.href="/Game"
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
        <input type="text" placeholder={isActive ? "Username" : "Create Username"} required/>
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
