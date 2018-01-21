import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import toggleArticle from '../decorators/toggleArticle'

function ArticleList(props) {
    const {toggleOpen, openArticleId} = props
    const articleElements = props.articles.map((article, index) => <li key = {article.id}>
        <Article article = {article}
                 defaultOpen = {index === 0}
                 isOpen = {article.id === openArticleId}
                 onButtonClick = {toggleOpen}
        />
    </li>)
    return (
        <ul>
            {articleElements}
        </ul>
    )
}

ArticleList.propTypes = {
    toggleOpen: PropTypes.func, // toggle opened article
    openArticleId: PropTypes.string,
    articles: PropTypes.array.isRequired
}

export default toggleArticle(ArticleList)