import React, { Component } from 'react'
import PropTypes from 'prop-types'
import dictionary from '../dictionary'

class LanguageContextProvider extends Component {
    static childContextTypes = {
        dictionary: PropTypes.object
    }

    getChildContext() {
        return {
            dictionary: dictionary[this.state.lang]
        }
    }

    static defaultProps = {
        lang: 'ru'
    }

    state = {
        lang: this.props.lang
    }

    handleChange = (e) => this.setState({lang: e.target.value});

    render() {
        return (
            <div>
                <select value={this.state.lang} onChange={this.handleChange}>
                    <option value="ru">RU</option>
                    <option value="en">EN</option>
                </select>

                {this.props.children}
            </div>
        )
    }
}

export default LanguageContextProvider