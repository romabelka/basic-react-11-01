import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {getLocaleText} from './utils'

export default class Header extends Component {
    static contextTypes = {
        locale: PropTypes.object
    }

    render() {
        const handleLocaleChange = this.props.onLocaleChange

        return (
            <div>
                <div>
                    {getLocaleText(this)('Select language') + ': '}
                    <button onClick= {handleLocaleChange()}>{getLocaleText(this)('original')}</button>
                    <button onClick= {handleLocaleChange('ru')}>{getLocaleText(this)('ru')}</button>
                </div>
                <h1>{getLocaleText(this)('App name')}</h1>
            </div>
        )
    }
}