import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Nav from './components/nav';

import Landing from './components/landing';
import Signin from './components/signin';

import './App.css';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Nav />
                    <main className="App-header">
                        <Switch>
                            <Route path="/" exact component={Landing} />
                            <Route path="/signin" component={Signin} />
                            <Route render={() => <h1>Not found</h1>}/>
                        </Switch>
                    </main>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
