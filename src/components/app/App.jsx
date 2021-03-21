import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DataEntry from '../../containers/dataEntry/DataEntry';
import RoundOneFlow from '../../containers/roundOneFlow/RoundOneFlow';
import './reset.css';
import './App.css';

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={RoundOneFlow}/>
          <Route exact path="/dataentry" component={DataEntry}/>
        </Switch>
      </Router>
    </>
  );
}
