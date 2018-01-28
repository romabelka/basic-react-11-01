import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import {connect} from 'react-redux'
import {filterSelect} from '../../AC'

import 'react-select/dist/react-select.css'

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    state = {
        selected: null
    }

    // handleChange = selected => this.setState({ selected })
    handleChange = selected => {
        const {filterSelect} = this.props
        // this.setState({ selected })
        filterSelect(selected)
    }

    render() {
        const { articles, selected } = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
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
    articles: state.articles,
    selected: state.filters.selected
}), { filterSelect })(SelectFilter)