import React, { Component } from 'react'
import Article from './Article'
import PropTypes from 'prop-types'


class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired,
          text: PropTypes.string,
          comments: PropTypes.array
        }).isRequired
      ).isRequired
    }

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
    this.setState((prevState) => {
            return openArticleId === prevState.openArticleId && this.state.openArticleId !== null ? {openArticleId: null} : { openArticleId }
        })
    }
}

export default ArticleList