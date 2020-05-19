import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Dashboard from '../../pages/Dashboard/Dashboard';

function App() {
  return (
    <>
      <NavBar />
      <Router>
        <Switch>
          <Route path="/" exact render={(props) => <Dashboard {...props} category="shirt" />} />
          <Route path="/pants" exact component={(props) => <Dashboard {...props} category="pants" />} />

        </Switch>
      </Router>
    </>
  );
}

export default App;
