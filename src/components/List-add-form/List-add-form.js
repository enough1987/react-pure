import React, { Component } from 'react';
import './List-add-form.css';

class ListAddForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: '',
            name: '',
            email: '',
            isDirty: false
        };

        this.validateForm = () => {
            let isValid = true;
            if(!this.state.name || !this.state.email) {
                isValid = false;
            }
            this.props.checkValidateForm(isValid, {
                name: this.state.name,
                email: this.state.email,
            });
        }
    }

    handleChange = (fieldName, value) => {
        this.setState({
            [fieldName]: value,
            isDirty: true
        });
        this.validateForm();
    }

    showErrors = () => {
        if (!this.state.isDirty) {
            return;
        }
        return (
            <div className='add-form-error'>
                <div className='add-form-item-error'></div>
                <div className='add-form-item-error'>
                    { !this.state.name ? 'Name is required' : ''}
                </div>
                <div className='add-form-item-error'>
                    { !this.state.email ? 'Email is required' : ''}
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className="list-add-form">
                <div className='add-form'>
                    <input className="add-form-item" placeholder="id"
                           disabled='disabled'/>
                    <input className="add-form-item" placeholder="name"
                           required
                           value={this.state.name}
                           onChange={e => this.handleChange('name', e.target.value)}/>
                    <input className="add-form-item" placeholder="email"
                           required
                           value={this.state.email}
                           onChange={e => this.handleChange('email', e.target.value)}/>
                </div>
                {this.showErrors()}
            </div>
        );
    }
}

export default ListAddForm;