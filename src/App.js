import './App.css';
import MainContainer from "./MainContainer"
import Home from "./Home";
import { BrowserRouter, Route } from "react-router-dom";
import React, {useEffect, useState} from 'react';


function App() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/users")
      .then((r) => r.json())
      .then((users) => setUsers(users));
  }, []);

  function setTheUser(newU) {
    setCurrentUser(newU)
  }

  function handleUpdateUser(updatedUserObj) {
    const updatedUsers = users.map((user) => {
      if (user.id === updatedUserObj.id) {
        return updatedUserObj;
      } else {
        return user;
      }
    });
    setUsers(updatedUsers);
  }

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <BrowserRouter>
      <Route exact path="/">
      <Home users={users} setUsers={setUsers} currentUser={currentUser} setCurrentUser={setCurrentUser} setTheUser={setTheUser}/>
      </Route>
      <Route exact path="/game">
      <MainContainer currentUser={currentUser} updateUser={handleUpdateUser}/>
      </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
