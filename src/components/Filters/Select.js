import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Select from 'react-select'
import {setFilters} from '../../AC'

import 'react-select/dist/react-select.css'

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    handleChange = selected => {
        const {setFilters} = this.props
        setFilters({
            selected: {
                data: selected,
                ids: selected.map((o) => o.value)
            }
        })
    }

    render() {
        const { articles } = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return <Select
            options={options}
            value={this.props.selected.data}
            onChange={this.handleChange}
            multi
        />
    }
}

export default connect(state => ({
    selected: state.filters.selected
}), { setFilters })(SelectFilter)
