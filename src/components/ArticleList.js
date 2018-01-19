import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
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

    toggleOpenArticle = (openArticleId) => {
      openArticleId === this.state.openArticleId ? this.setState({ openArticleId: null }) : this.setState({ openArticleId });
    }
}

export default ArticleList
