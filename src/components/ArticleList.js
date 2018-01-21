import React, { Component } from 'react'
import Article from './Article'
import accordion from '../decorators/accordion'

class ArticleList extends Component {
    state = {
        error: null,
    }

    render() {
        if (this.state.error) return <h2>Some error</h2>

        const articleElements = this.props.articles.map((article, index) => <li key = {article.id}>
            <Article article = {article}
                     isOpen = {article.id === this.props.openArticleId}
                     onButtonClick = {this.props.toggleOpenArticle}
            />
        </li>)
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}

export default accordion(ArticleList)