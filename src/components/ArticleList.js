import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import Accordion from './common/Accordion'
import {connect} from 'react-redux'
import {filtratedArticlesSelector} from '../selectors'

class ArticleList extends Accordion {
    render() {
        console.log('---', 'rerendering article list')
        const {articles} = this.props
        if (!articles.length) return <h3>No Articles</h3>
        const articleElements = articles.map(({id}) => <li key={id}>
            <Article id={id}
                     isOpen={id === this.state.openItemId}
                     toggleOpen={this.toggleOpenItemMemoized(id)}
            />
        </li>)
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}


ArticleList.defaultProps = {
    articles: []
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
}

export default connect(state => {
    console.log('---', 'connect updated')
    return {
        articles: filtratedArticlesSelector(state)
    }
})(ArticleList)