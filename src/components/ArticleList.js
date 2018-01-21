import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Article from './Article'

import isOpenHOC from '../decorators/isOpenHOC'

class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,
        toggleOpenArticle: PropTypes.func.isRequired
    }
    render() {
        const {openArticleId, toggleOpenArticle} = this.props
        const articleElements = this.props.articles.map((article, index) => <li key = {article.id}>
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
}

export default isOpenHOC(ArticleList)