import React, { Component } from 'react'
import Article from './Article'
import accordeon from '../decorators/accordeon'

class ArticleList extends Component {
    render() {
        const {openArticleId, toggleOpenArticle} = this.props
        const articleElements = this.props.articles.map((article, index) => <li key = {article.id}>
            <Article article = {article}
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
}

export default accordeon(ArticleList)
