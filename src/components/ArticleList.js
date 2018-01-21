import React from 'react'
import accordeon from '../decorators/accordeon'
import Article from './Article'

const ArticleList = (props) => {
  const {toggleItem, itemId} = props
  
  const articleElements = props.articles.map((article, index) => <li key={article.id}>
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

export default accordeon(ArticleList)