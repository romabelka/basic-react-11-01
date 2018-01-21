import React from 'react'
import PropTypes from 'prop-types'
import accordeon from '../decorators/accordeon'
import Article from './Article'

const ArticleList = (props) => {
  const {articles, toggleItem, itemId} = props
  
  const articleElements = articles.map((article, index) => <li key={article.id}>
    <Article article={article}
             defaultOpen={index === 0}
             isOpen={article.id === itemId}
             onButtonClick={toggleItem}
    />
  </li>)
  return (
    <ul>
      {articleElements}
    </ul>
  )
}

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired,
  toggleItem: PropTypes.func,
  itemId: PropTypes.string,
}

ArticleList.defaultProps = {
  articles: [],
}

export default accordeon(ArticleList)