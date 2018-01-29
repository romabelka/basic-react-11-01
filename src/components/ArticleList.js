import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Article from './Article'
import Accordion from './common/Accordion'

class ArticleList extends Accordion {
  render() {
    const {articles, selectedArticles} = this.props
    if (!articles.length) return <h3>No Articles</h3>
    const articleElements = articles
      .filter(article => {
        return !selectedArticles.length
          ? true
          : selectedArticles.find(item => item.value === article.id)
      })
      .map(article =>
        <li key={article.id}>
          <Article article={article}
                   isOpen={article.id === this.state.openItemId}
                   toggleOpen={this.toggleOpenItemMemoized(article.id)}
          />
        </li>)
    setTimeout(() => console.log('articles', articles), 1000)
    setTimeout(() => console.log('this.props', this.props), 2000)
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
  selectedArticles: state.selectedArticles,
}))(ArticleList)