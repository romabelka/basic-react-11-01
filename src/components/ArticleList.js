import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import Accordion from './Accordion'

class ArticleList extends Accordion {
    static propTypes = {
        articles: PropTypes.array.isRequired
    }

    constructor(props) {
        super(props)
    }

    state = {
        error: null
    }

    componentDidCatch(error) {
        console.log('---', 123, error)
        this.setState({ error })
    }

    render() {
        if (this.state.error) return <h2>Some error</h2>

        const articleElements = this.props.articles.map((article, index) => <li key = {article.id}>
            <Article article = {article}
                     defaultOpen = {index === 0}
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

export default ArticleList