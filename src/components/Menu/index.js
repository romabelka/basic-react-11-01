import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MenuItem from './MenuItem'

class Menu extends Component {
    static propTypes = {

    };
    static contextTypes = { 
        dict : PropTypes.object
    }
    
    render() {
        return (
            <div>
                <h2>{this.context.dict.MAIN_MENU}</h2>
                {this.props.children}
            </div>
        )
    }
}

export { MenuItem }
export default Menu