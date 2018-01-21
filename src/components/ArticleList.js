import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MyTypes from '../types'
import Article from './Article'
import AccordionClass from './AccordionClass';

class ArticleList extends AccordionClass {
    state = {
        error: null
    }

    static propTypes = {
        articles: MyTypes.ArticleListType
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

export default ArticleList;