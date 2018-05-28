import React, { Component } from 'react';
import './List.css';
import ListCrud from '../List-crud/List-crud';
import ListAddForm from '../List-add-form/List-add-form';

class List extends Component {

    noData = 'no data is available';
    headers = [
        'id', 'name', 'email'
    ];

    constructor(props) {
        super(props);

        this.state = {
            headerBodies: []
        }
    }

    getSection = (data, className) => {
        const body = data && data.length
            ? data.map((item, i) => {
                return <div key={i} className={ `${className}-item`}> { item } </div>})
            : <div className={`no-data no-data-${className}`}> {this.noData} </div>;

        return (
            <div className={className}>
                {body}
            </div>
        );
    }

    handleCrudClick = (action) => {
        console.log('The link was clicked.', action, this.isValid, this.newItem );
        if (action === 'add' && this.isValid) {
            this.setState({
                headerBodies: [...this.state.headerBodies, {
                    ...this.newItem,
                    id: this.state.headerBodies.length
                }]
            });
        }
    }

    checkValidateForm = (isValid, newItem) => {
        console.log('The link was clicked.', isValid );
        this.isValid = isValid;
        this.newItem = newItem;
    }

    render() {
        console.log(this.state)
        const header = this.getSection(this.headers, 'header');
        const headerBodies = this.state.headerBodies && this.state.headerBodies.length
        ? this.state.headerBodies.map((item, i) => {
            return (
                <div key={i} className="header-body">
                    <div className="header-body-item"> { item.id } </div>
                    <div className="header-body-item"> { item.name } </div>
                    <div className="header-body-item"> { item.email } </div>
                </div>
            )
        })
        :  <div className="header-body">
                <div className="no-data no-data-error"> {this.noData} </div>
            </div>;

        return (
            <div className="List">
                --- List ---
                <ListCrud handleClick={this.handleCrudClick} />
                <ListAddForm checkValidateForm={this.checkValidateForm}/>
                {header}
                {headerBodies}
            </div>
        );
    }
}

export default List;