import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import toggleActive from '../decorators/toggleActive'

class ArticleList extends Component {
    static propTypes = {
      articles: PropTypes.arrayOf(PropTypes.shape.Article).isRequired,
      toggleActive: PropTypes.func,
      activeId: PropTypes.string
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
                     isActive = {article.id === this.props.activeId}
                     toggleActive = {this.props.toggleActive}
            />
        </li>)
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}

export default toggleActive(ArticleList)
