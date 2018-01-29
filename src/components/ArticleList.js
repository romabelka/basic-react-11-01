import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Article from './Article'
import Accordion from './common/Accordion'

class ArticleList extends Accordion {
  render() {
    const {articles} = this.props
    const {selected, range} = this.props.articlesFilters
  
    const isSelected = (article) => !selected.length
      ? true : selected.find(item => item.value === article.id)
  
    const isInDatesRange = (article) => {
      const {from, to} = range
      if (!from || !to) {
        return true
      }
      const articleDate = new Date(article.date)
      return articleDate >= from && articleDate <= to
    }
    
    if (!articles.length) return <h3>No Articles</h3>
    const articleElements = articles
      .filter(isSelected)
      .filter(isInDatesRange)
      .map(article =>
        <li key={article.id}>
          <Article article={article}
                   isOpen={article.id === this.state.openItemId}
                   toggleOpen={this.toggleOpenItemMemoized(article.id)}
          />
        </li>)
    return (
      <ul>
        {articleElements}
      </ul>
    )
  }
}


ArticleList.defaultProps = {
  articles: []
}

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired
}

export default connect(state => ({
  articles: state.articles,
  articlesFilters: state.articlesFilters,
}))(ArticleList)