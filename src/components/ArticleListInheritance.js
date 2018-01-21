import React from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import ArticleListWrapper from './ArticleListWrapper'

class ArticleListInheritance extends ArticleListWrapper {
    static propTypes = {
        articles: PropTypes.array
    }

    constructor(props) {
      super(props)

      this.state = {
        ...this.state,
        error: null
      }
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

export default ArticleListInheritance
