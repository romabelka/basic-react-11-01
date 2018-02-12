import React from 'react'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'

function MenuItem({ children, to }) {
    return (
        <div>
            <NavLink to = {to} activeStyle = {{ color: 'red' }}>{children}</NavLink>
        </div>
    )
}

MenuItem.propTypes = {
}

export default MenuItem