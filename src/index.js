import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';

import './App.css';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import home from './App.js';
import exo from './Exo';
import temps from './Timer';

const Root = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={home} />
            <Route path="/exo" component={exo} />
            <Route path="/temps" component={temps} />
        </Switch>
    </Router>
)
render(
    <Root />,
    document.getElementById('root')
   )

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
