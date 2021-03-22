import React, {Suspense} from 'react';
import {Switch, Route, Redirect, BrowserRouter} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Login from './Screens/Login/login';

function App() {

  let routes = (
    <BrowserRouter>
    <Switch>
      <Route path="/" render={(props) => <Login />}/>
    </Switch>
    </BrowserRouter>
  );
  
  return <Suspense fallback={<p>Loading ...</p>}>{routes}</Suspense>;
}

export default App;
