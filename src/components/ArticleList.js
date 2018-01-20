import React, { Component } from 'react'
import Article from './Article'
import catchError from '../decorators/catchError'
import toggleOpenItem from '../decorators/toggleOpenItem'

function ArticleList(props) {
    if (props.error) return <h2>Some error</h2>
    const {toggleOpenItem: toggleOpenArticle, itemId: openAricleId} = props
    const articleElements = props.articles.map((article, index) => <li key = {article.id}>
        <Article article = {article}
                    defaultOpen = {index === 0}
                    isOpen = {article.id === openAricleId}
                    onButtonClick = {toggleOpenArticle}
        />
    </li>)
    return (
        <ul>
            {articleElements}
        </ul>
    )
}

export default catchError(toggleOpenItem(ArticleList))