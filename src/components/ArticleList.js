import React, { Component } from 'react'
import Article from './Article'

class ArticleList extends Component {
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

    toggleOpenArticle = (openArticleId) => () => {
        if(openArticleId !== this.state.openArticleId) {
            this.setState({ openArticleId })
        } else {
            this.setState({ openArticleId: null });
        }
    }
}

export default ArticleList