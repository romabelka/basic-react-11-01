import React, { Component } from 'react'
import {connect} from 'react-redux'
import {loadDictionary} from '../AC'

class LangForm extends Component {
    componentDidMount() {
        this.props.loadDictionary(this.props.value)
    }

    state = {
        lang: ''
    }

    render() {
        const {value} = this.props
        return (
            <div>
                <select value = {value} onChange = {this.handleChange}>
                    <option disabled>Choose language</option>
                    <option value='en'>English</option>
                    <option value='ru'>Русский</option>
                </select>                
            </div>
        )
    }

    handleChange = event => {
        const lang = event.target.value
        this.props.loadDictionary(lang)
        this.props.onChange(lang)
    }
}

export default connect(null, { loadDictionary })(LangForm)