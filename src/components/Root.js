import React, { Component } from 'react'
import PropTypes from 'prop-types'
import App from './App'
import dictionary from '../dictionary'

class Root extends Component {
    static childContextTypes = {
        dictionary: PropTypes.object
    }

    getChildContext() {
        return {
            dictionary
        }
    }

    render() {
        return (
            <div>
                <App/>
            </div>
        )
    }
}

export default Root