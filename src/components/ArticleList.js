import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Article from './Article'
import Accordion from './common/Accordion'
import {filterArticle} from '../AC'

class ArticleList extends Accordion {
    render() {
        const {articles, filterArticles} = this.props
        let articleList = filterArticles.length <= articles.length ? filterArticles : articles
        if (!articleList.length) return <h3>No Articles</h3>
        const articleElements = articleList.map((article) => <li key={article.id}>
            <Article article={article}
                     isOpen={article.id === this.state.openItemId}
                     toggleOpen={this.toggleOpenItemMemoized(article.id)}
            />
        </li>)
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

export default connect(({articles, filterArticles}) => ({
    articles,
    filterArticles
}))(ArticleList)