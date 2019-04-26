import React, {Component} from 'react';
import Main from './components/main';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Route exact path='/' component={Main}/>
                <Switch>
                    <Route path='/:title' component={Main}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
