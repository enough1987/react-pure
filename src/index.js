import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import App from './App';
import List from './components/List/List';
import Home from './components/Home/Home';
import NotFaund from './components/NotFaund/Not-faund';

ReactDOM.render(
    <BrowserRouter history={createBrowserHistory()}>
        <App>
            <Switch>
                <Route exact={true} path="/" component={Home}/>
                <Route path="/list" component={List}/>
                <Route path="*" component={NotFaund}/>
            </Switch>
        </App>
    </BrowserRouter>,
    document.getElementById('root')
);
registerServiceWorker();
