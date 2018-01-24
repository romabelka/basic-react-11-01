import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

export default Component => class Form extends React.Component {
    static propTypes = {
        fields: PropTypes.shape({}).isRequired
    }

    validate = (name, value) => {
        const field = this.props.fields[name]
        return ('undefined' !== typeof field.validate) ? field.validate(value) : true
    }
    
    state = {
        fields: Object.keys(this.props.fields).reduce((memo, fieldName) => {
            memo[fieldName] = memo[fieldName] || {}
            memo[fieldName].value = this.props.fields[fieldName].attrs.value || ''
            memo[fieldName].isValid = true
            return memo
        }, {})
    }

    render() {
        const { fields } = this.props
        const formElements = Object.keys(fields).reduce((memo, fieldName) => {
            fields[fieldName].attrs.name = fieldName
            fields[fieldName].attrs.value = this.state.fields[fieldName].value
            fields[fieldName].attrs.onChange = (ev) => this.handleChange(ev, false)
            fields[fieldName].attrs.onBlur = (ev) => this.handleChange(ev, true)
            memo.push(this.getElement(fields[fieldName]))
            return memo
        }, [])
        return <Component {...this.props} {...this.state} formElements = {formElements} />
    }

    getElement = (field) => {
        switch (field.tagName) {
            case 'input': return <input {...field.attrs} />
            case 'button': return <button {...field.attrs}></button>
            case 'textarea': return <textarea {...field.attrs}></textarea>
            case 'select': return <select {...field.attrs}></select>
            default: return <input {...field.attrs} />
        }
    }

    handleChange = (ev, needValidation = false) => {
        const name = ev.target.name
        const value = ev.target.value
        const isValid = (needValidation) 
            ? this.validate(name, value) 
            : (this.state.fields[name].isValid || this.validate(name, value))

        const fields = Object.assign({}, this.state.fields, {
            [name]: { value, isValid }
        })

        this.setState({ fields })
    }
}