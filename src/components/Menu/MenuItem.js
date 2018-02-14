import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'
import {getLocaleText} from '../utils'

class MenuItem extends Component {
    render() {
        const { children, to } = this.props
        return (
            <div>
                <NavLink to = {to} activeStyle = {{ color: 'red' }}>{getLocaleText(this)(children)}</NavLink>
            </div>
        )
    }
}

MenuItem.propTypes = {
}

MenuItem.contextTypes = {
    locale: PropTypes.object
}

export default MenuItem