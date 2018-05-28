import React, { Component } from 'react';
import List from './components/List/List';
import Home from './components/Home/Home';
import NotFaund from './components/NotFaund/Not-faund';
import {Route, Switch} from 'react-router-dom';

class Routing extends Component {
    render() {
        return (
            <Switch>
                <Route exact={true} path="/" component={Home}/>
                <Route path="/list" component={List}/>
                <Route path="*" component={NotFaund}/>
            </Switch>
        );
    }
}

export default Routing;