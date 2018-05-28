import React, { Component } from 'react';
import './List-crud.css';

class ListCrud extends Component {

    render() {
        if(this.props) {
            console.log(this);
        }
        return (
            <div className="list-crud">
                <button
                    onClick={e => this.props.handleClick('add')}>
                    Add
                </button>
                <button
                    onClick={e => this.props.handleClick('edit')}>
                    Edit
                </button>
                <button
                    onClick={e => this.props.handleClick('remove')}>
                    Remove
                </button>
            </div>
        );
    }
}

export default ListCrud;