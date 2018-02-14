import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {getLocaleText} from '../utils'

class Loader extends Component {
    render() {
        return (
            <h2>{getLocaleText(this)('Loading') + '...'}</h2>
        )
    }
}

Loader.propTypes = {
}

Loader.contextTypes = {
    locale: PropTypes.object
}

export default Loader