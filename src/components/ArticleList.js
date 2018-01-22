import React, { Component } from 'react'
import Article from './Article'
import PropTypes from 'prop-types'
import toggleOpenArticle from '../decorators/toggleOpenArticle'


function ArticleList(props) {

  if (props.error) return <h2>Some error</h2>

   return (
            <div>
              {getBody(props)}
            </div>
        )
}

function getBody({error, articles, openArticleId, toggleOpenArticle} = props) {

  const articleElements = articles.map((article, index) => <li key = {article.id}>
          <Article article = {article}
                   defaultOpen = {index === 0}
                   isOpen = {article.id === openArticleId}
                   onButtonClick = {toggleOpenArticle}
          />
        </li>)

  return (
    <ul>
      {articleElements}
    </ul>
    )
}

ArticleList.propTypes = {
        articles: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired,
          text: PropTypes.string,
          comments: PropTypes.array
        }).isRequired
      ).isRequired
}

export default toggleOpenArticle(ArticleList)
