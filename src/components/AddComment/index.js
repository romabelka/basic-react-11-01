import React, { Component } from 'react'
import './style.css'

class AddComment extends Component {
    static propTypes = {

    };

    state = {
        name: '',
        text: '',
        errorName: false,
        errorText: false
    };

    render() {
        const name = this.state.name;
        const text = this.state.text;
        const errorName = this.state.errorName;
        const errorText = this.state.errorText;

        return (
            <div>
                Username: <input type = "text" value = {name} onChange = {this.handleChange('name', 'errorName')} className = {errorName ? 'error' : ''} />
                Message: <input type = "text" value = {text} onChange = {this.handleChange('text', 'errorText')} className = {errorText ? 'error' : ''} />
            </div>
        )
    };

    handleChange = (fieldName, errName) => ev => {
        const stateVal = ev.target.value;
        let newState = {},
            newErr = {};

        (stateVal.length < 10 && stateVal.length > 0) ? newErr[errName] = true : newErr[errName] = false;

        if (stateVal.length > 50) return;

        newState[fieldName] = stateVal;
        this.setState(newState);
        this.setState(newErr);
    }
}

export default AddComment;