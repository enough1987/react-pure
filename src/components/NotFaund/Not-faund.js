import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Not-faund.css';

class NotFaund extends Component {
    render() {
        return (
            <div className="not-faund">
                <h1 className="not-faund-title">404</h1>
                <h2 className="not-faund-body">
                    error: Page is not found.
                    <li><Link to="/">Home page is here</Link></li>
                </h2>
            </div>
        );
    }
}

export default NotFaund;