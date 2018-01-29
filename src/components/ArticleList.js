import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Article from './Article'
import Accordion from './common/Accordion'

class ArticleList extends Accordion {
    render() {
        const articles = filterArticles(this.props)
        if (!articles.length) return <h3>No Articles</h3>
        const articleElements = articles.map((article) => <li key={article.id}>
            <Article article={article}
                     isOpen={article.id === this.state.openItemId}
                     toggleOpen={this.toggleOpenItemMemoized(article.id)}
            />
        </li>)
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}

function filterArticles({articles, filters}) {

    const {from, to, selected} = filters;

    return articles.filter( ({date, id}) => {
        const byDate = !from && !to || new Date(date) >= from && new Date(date) <= to;
        const bySelect = !selected.length || selected.map( ({ value }) => value ).includes(id)

        return byDate && bySelect
    } )
}


ArticleList.defaultProps = {
    articles: []
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
}

export default connect(state => ({
    articles: state.articles,
    filters: state.filters
}))(ArticleList)