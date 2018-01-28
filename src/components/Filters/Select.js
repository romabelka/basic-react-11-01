import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import {connect} from 'react-redux'
import {setFilters} from '../../AC'
import {SELECT} from '../../constants'

import 'react-select/dist/react-select.css'

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,
        selectedArticle: PropTypes.array
    };

    handleChange = selected => {
        const action = setFilters(SELECT, {
            selectedArticle: selected,
            dateRange: this.props.filters.dateRange
        }, this.props.articles)
        this.props.dispatch(action)
    }

    render() {
        console.log('render select')
        const { articles } = this.props
        const { selectedArticle } = this.props.filters
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return <Select
            options={options}
            value={selectedArticle}
            onChange={this.handleChange}
            multi
        />
    }
}

const mapStateToProps = ({filters, articles}) => ({
    filters,
    articles
})

export default connect(mapStateToProps)(SelectFilter)