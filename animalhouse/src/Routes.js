import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import Home from './App';
import GamePage from './components/GamePage';
import LoginPage from './components/LoginPage';
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/LoginPage" component={LoginPage} />
                    <Route path="/GamePage" component={GamePage} />
                </Switch>
            </Router>
        )
    }
}