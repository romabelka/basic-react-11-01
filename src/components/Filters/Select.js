import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import {connect} from 'react-redux'
import {filterArticlesById} from '../../AC'

import 'react-select/dist/react-select.css'

class SelectFilter extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired
  }
  
  handleChange = selected => {
    this.props.dispatch(filterArticlesById(selected))
  }
  
  render() {
    const {articles, selected} = this.props
    
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

export default connect((storeState) => ({
  articles: storeState.articles,
  selected: storeState.articlesFilters.selected,
}))(SelectFilter)