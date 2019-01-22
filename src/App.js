import React from 'react';
import {
  Route,
  HashRouter,
} from 'react-router-dom';
import Page from './components/Page';
import BcccPage from './components/BcccPage';
import './App.scss';

const App = () => (
  <HashRouter basename={process.env.PUBLIC_URL}>
    <div className="App">
      <Route exact path="/" component={BcccPage} />
      <Route path="/tech_futures_london_event_2019" component={Page} />
    </div>
  </HashRouter>
);

export default App;
