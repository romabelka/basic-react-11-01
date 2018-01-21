import React, { Component } from 'react'
import Article from './Article'
import accordeonBehaviour from '../decorators/accordeonBehaviour';

class ArticleList extends accordeonBehaviour {
    state = {
        error: null,
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
                     isOpen = {article.id === this.state.itemId}
                     onButtonClick = {this.toggleItem(article.id)}
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