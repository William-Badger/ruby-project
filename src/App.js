import './App.css';
import MainContainer from "./MainContainer"
import Home from "./Home";
import { BrowserRouter, Route } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <BrowserRouter>
      <Route exact path="/">
      <Home />
      </Route>
      <Route exact path="/home">
      <MainContainer />
      </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
