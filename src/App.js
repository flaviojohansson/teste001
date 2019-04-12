import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Nav from './components/nav';
import Landing from './components/landing';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Nav />
        <main className="App-header">
          <Switch>
            <Route path="/" exact={true} component={Landing} />
          </Switch>        
        </main>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
