import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'

import 'react-select/dist/react-select.css'

import {connect} from 'react-redux'
import {selectArticleFilter} from '../../AC'
// подключим AC 


class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    // state = {
    //     selected: null
    // }

    handleChange = selected => {
         
        const  { selectArticleFilter } = this.props
        selectArticleFilter(selected)
    
        // this.setState({ selected })
    }

    render() {
        const { articles , selected } = this.props
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

export default  connect(state => ({ articles: state.articles, selected: state.select}),  {selectArticleFilter} )(SelectFilter)