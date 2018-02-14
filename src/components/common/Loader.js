import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Loader extends Component {
    render() {
        return (
            <h2>{this.context.i18n('LOADING')}</h2>
        )
    }
}

Loader.propTypes = {
}

Loader.contextTypes = {
    i18n: PropTypes.func
}

export default Loader