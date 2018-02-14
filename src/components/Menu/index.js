import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MenuItem from './MenuItem'
import {getLocaleText} from '../utils'

class Menu extends Component {
    static propTypes = {

    };

    static contextTypes = {
        locale: PropTypes.object
    }

    render() {
        return (
            <div>
                <h2>{getLocaleText(this)('Main menu')}:</h2>
                {this.props.children}
            </div>
        )
    }
}

export { MenuItem }
export default Menu