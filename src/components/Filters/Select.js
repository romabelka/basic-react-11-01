import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import { changeFilters } from '../../AC'
import 'react-select/dist/react-select.css'

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    state = {
        selected: null
    }

    handleChange = (selectedArticles) => {
        this.props.changeFilters({
            selectedArticles: selectedArticles.map(o => o.value)
        })
    }
    
    render() {
        const { articles, filters } = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return <Select
            options={options}
            value={filters.selectedArticles}
            onChange={this.handleChange}
            multi
        />
    }
}

export default SelectFilter