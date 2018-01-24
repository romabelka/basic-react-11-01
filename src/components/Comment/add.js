import React, { Component } from 'react'
import PropTypes from 'prop-types'
import form from '../../decorators/form'

class CommentForm extends Component {
    static propTypes = {
        fields: PropTypes.shape({
            user: PropTypes.shape({
                value: PropTypes.string
            }),
            text: PropTypes.shape({
                value: PropTypes.string.isRequired
            })
        })
    };

    render() {
        const {fields, formElements} = this.props
        const form = formElements.map((el) => <div key = {el.props.name} className = 'form-group'>
            <label className = {fields[el.props.name].isValid ? 'is-valid' : 'is-invalid'}>
                {el}
            </label>
        </div>)
        return (
            <div className = 'w-25'>
                {form}
            </div>
        )
    }
}

export default form(CommentForm)