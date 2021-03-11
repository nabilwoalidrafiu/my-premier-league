import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home';
import SingleTeam from "./Components/SingleTeam/SingleTeam";
import NotFound from './Components/NotFound/NotFound';
function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route path="/home">
                    <Home></Home>
                </Route>
                <Route path="/team/:idTeam">
                  <SingleTeam></SingleTeam>
                </Route>
                <Route exact path="/">
                    <Home></Home>
                </Route>
                <Route path="*">
                  <NotFound></NotFound>
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
