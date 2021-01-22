import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';


export default () => {
    return (
        <Switch>
            <Route exact path="/" >
                <Home/>
            </Route>
            <Route exact path="/about" >
                <About/>
            </Route>
        </Switch>
    );
}