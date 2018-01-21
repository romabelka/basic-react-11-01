import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import toggleOpenArticle from '../decorators/accordeon'

class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    }

    componentDidCatch(error) {
        console.log('---', 123, error)
        this.setState({ error })
    }

    render() {
        const {error, openArticleId, toggleOpenArticle} = this.props
        if (error) return <h2>Some error</h2>

        const articleElements = this.props.articles.map((article, index) => <li key = {article.id}>
            <Article article = {article}
                     defaultOpen = {index === 0}
                     isOpen = {article.id === openArticleId}
                     toggleOpenArticle = {toggleOpenArticle}
            />
        </li>)
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }


}

export default toggleOpenArticle(ArticleList)
