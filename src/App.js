import React from 'react';
// import styles from './App.module.scss';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Challenge from './pages/challenge';
import Home from './pages/home';
import ContextLoader from './components/context-loader';
function App() {
  return (
    <Router>
      <ContextLoader>
        <Switch>
          <Route path="/challenge/:id">
            <Challenge />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </ContextLoader>
    </Router>
  );
}

export default App;
