import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {Router} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import App from './App';
import Routing from './Routing';

const history = createBrowserHistory();

ReactDOM.render(
    <Router history={history}>
        <App>
            <Routing/>
        </App>
    </Router>,
    document.getElementById('root')
);
registerServiceWorker();
