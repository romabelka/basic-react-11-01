import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import { connect } from 'react-redux'
import { changeSelection } from '../../AC'
import { articlesSelector, filtersSelector } from '../../selectors'

import 'react-select/dist/react-select.css'

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.object.isRequired
    };

    handleChange = selected => this.props.changeSelection(selected.map(option => option.value))

    render() {
        const { articles, selected } = this.props
        const options = Object.keys(articles).map(id => ({
            label: articles[id].title,
            value: id
        }))

        return <Select
            options={options}
            value={selected}
            onChange={this.handleChange}
            multi
        />
    }
}

export default connect(state => ({
    selected: filtersSelector(state).selected,
    articles: articlesSelector(state)
}), { changeSelection })(SelectFilter)