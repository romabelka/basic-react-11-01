import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import {connect} from 'react-redux'
import {changeSelect} from '../../AC'

import 'react-select/dist/react-select.css'

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,
        selectedArticle: PropTypes.array
    };

    handleChange = selected => {
        const action = changeSelect(selected)
        this.props.dispatch(action)
    }

    render() {
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

const mapStateToProps = ({filters}) => ({
    filters
})

export default connect(mapStateToProps)(SelectFilter)