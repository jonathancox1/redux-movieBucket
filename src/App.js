import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
// import './App.css';
import MainList from './components/MainList'

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={MainList} />
          <Route exact path="/myList" component={MainList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
