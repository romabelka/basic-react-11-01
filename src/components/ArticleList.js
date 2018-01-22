import React, { Component } from 'react'
import Article from './Article'
import PropTypes from 'prop-types'
//import toggleOpenArticle from '../decorators/toggleOpenArticle'
import Accordion from '../decorators/toggleOpenArticle'
/*

function ArticleList(props) {

    const {toggleOpenArticle, openArticleId} = props

    const articleElements = props.articles.map((article, index) => <li key = {article.id}>
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

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired,
    toggleOpenArticle: PropTypes.func,
    openArticleId: PropTypes.string
}
*/

class ArticleList extends Accordion {

    state = {
        error: null,
        openArticleId: null
    }

    componentDidCatch(error) {
        console.log('---', 123, error)
        this.setState({ error })
    }

    render() {
        if (this.state.error) return <h2>Some error</h2>

        const articleElements = this.props.articles.map((article, index) => <li key = {article.id}>
            <Article article = {article}
                     //defaultOpen = {index === 0}
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

//    toggleOpenArticle = (openArticleId) => this.setState({openArticleId: this.state.openArticleId !== openArticleId ? openArticleId : null})
}

export default ArticleList//toggleOpenArticle(ArticleList)