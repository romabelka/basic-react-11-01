import React, { Component } from 'react'
import PropTypes from 'prop-types'
class UserForm extends Component {
    static propTypes = {

    };

    state = {
        user: ''
    }
    static contextTypes = { 
        dict : PropTypes.object
    }
    
    render() {
        const {value} = this.props
        return (
            <div>
               {this.context.dict.USERNAME} <input type = "text" value = {value} onChange = {this.handleChange}/>
            </div>
        )
    }

    handleChange = ev => this.props.onChange(ev.target.value)
}

export default UserForm