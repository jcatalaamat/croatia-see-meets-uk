import React from 'react';
import {
  Route,
  BrowserRouter,
} from 'react-router-dom';
import Page from './components/Page';
import BcccPage from './components/BcccPage';
import './App.scss';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Route exact path={`${process.env.PUBLIC_URL}/`} component={BcccPage} />
      <Route path={`${process.env.PUBLIC_URL}/tech_futures_london_event_2019`} component={Page} />
    </div>
  </BrowserRouter>
);

export default App;
