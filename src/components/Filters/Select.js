import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import {connect} from 'react-redux'
import {filterArticles} from '../../AC'

import 'react-select/dist/react-select.css'

class SelectFilter extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired
  }
  
  handleChange = selected => {
    this.props.dispatch(filterArticles(selected))
  }
  
  render() {
    const {articles, selectedArticles} = this.props
    
    const options = articles.map(article => ({
      label: article.title,
      value: article.id
    }))
    
    return <Select
      options={options}
      value={selectedArticles}
      onChange={this.handleChange}
      multi
    />
  }
}

export default connect((storeState) => ({
  articles: storeState.articles,
  selectedArticles: storeState.selectedArticles,
}))(SelectFilter)