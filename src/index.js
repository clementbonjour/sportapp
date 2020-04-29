import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';

import './App.css';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './App.js';
import Exo from './Exo';
import MyForm from './MyForm';

const Root = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/exo" component={Exo} />
            <Route path="/temps" component={MyForm} />
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
