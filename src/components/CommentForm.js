import React, { Component } from 'react'

class CommentForm extends Component {
    static propTypes = {

    };

    state = {
        values: {
            name: '',
            text: ''
        },
        errorInput: {}
    }

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
                        className = {this.state.errorInput.name ? 'error-input' : ''}
                    />
                </p>
                <p>
                    <label>Text:</label>
                    <br/>
                    <textarea
                        value = {this.state.text}
                        onChange = {this.handleChangeValidate('text') }
                        className = {this.state.errorInput.text ? 'error-input' : ''}>
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
