import React from 'react'
import Article from './Article'

const ArticleList = (props) => {
  const {articles} = props
  const articleElements = articles.map((article, index) => (
    <li key={article.id}>
      <Article article={article} defaultOpen={index === 0} />
    </li>
  ))
  return (
    <ul>
      {articleElements}
    </ul>
  )
}

export default ArticleList