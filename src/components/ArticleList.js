import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
// import accordion from '../decorators/accordion'
import Accordion from './Accordion'
class ArticleList extends Accordion {
    state = {
        error: null,
    }
    static propTypes = {
        articles: PropTypes.array.isRequired
    }

    render() {
        if (this.state.error) return <h2>Some error</h2>

        const articleElements = this.props.articles.map((article, index) => <li key = {article.id}>
            <Article article = {article}
                     isOpen = {article.id === this.state.openArticleId}
                     onButtonClick = {this.toggleOpenArticle}
            />
        </li>)
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}

// export default accordion(ArticleList)
export default ArticleList;