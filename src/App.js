import './App.css';
import MainContainer from "./MainContainer"
import Home from "./Home";
import { BrowserRouter, Route } from "react-router-dom";
import React, {useEffect, useState} from 'react';



function App() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState('')

  useEffect(() => {
    fetch("http://localhost:9292/users")
      .then((r) => r.json())
      .then((users) => setUsers(users));
  }, []);



  return (
    <div className="App">
      <header className="App-header">
      </header>
      <BrowserRouter>
      <Route exact path="/">
      <Home users={users} setUsers={setUsers} currentUser={currentUser} setCurrentUser={setCurrentUser}/>
      </Route>
      <Route exact path="/game">
      <MainContainer currentUser={currentUser}/>
      </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
