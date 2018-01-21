import React, { Component } from 'react'
import Article from './Article'
import toggleAccordion from '../decorators/toggleAccordion'

class ArticleList extends Component {
    state = {
        error: null
    }

    componentDidCatch(error) {
        console.log('---', 123, error)
        this.setState({ error })
    }

    render() {
        const {openArticleId, toggleOpenArticle} = this.props
        if (this.state.error) return <h2>Some error</h2>

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

export default toggleAccordion(ArticleList)