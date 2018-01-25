import React, { Component } from 'react'

class CommentForm extends Component {

    state = {
        values: {
            name: '',
            text: ''
        },
        errorInput: {}
    }

    isError = (nameField) => this.state.errorInput[nameField] ? 'error-input' : '';

    render() {

        return (
            <fieldset>
                <legend>Add Your Comment:</legend>
                <p>
                    <label>Name:</label>
                    <br/>
                    <input
                        type = "text"
                        value = {this.state.name}
                        onChange = {this.handleChangeValidate('name')}
                        className = {this.isError('name')}
                    />
                </p>
                <p>
                    <label>Text:</label>
                    <br/>
                    <textarea
                        value = {this.state.text}
                        onChange = {this.handleChangeValidate('text') }
                        className = {this.isError('text')}>
                    </textarea>
                </p>
            </fieldset>
        )
    }

    handleChangeValidate = (name) => (ev) => {

        const value = ev.target.value
        if (value.length > 50) {
            return;
        }

        this.setState({
            values: {
                [name]: value
            },
            errorInput: {
                [name]: (value.length < 10) ? true : false
            }
        })

    }

}

export default CommentForm
