import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Article from './Article'
import Accordion from './common/Accordion'

class ArticleList extends Accordion {
    render() {
        const {articles} = this.props
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


ArticleList.defaultProps = {
    articles: []
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
}

function getTimestampFromString(date) {
    return new Date(date).getTime()
}

function isDateInRange(date, from, to) {
    const dateTimestamp = getTimestampFromString(date)
    const fromTimestamp = getTimestampFromString(from)
    const toTimestamp = getTimestampFromString(to)

    return fromTimestamp <= dateTimestamp && dateTimestamp <= toTimestamp
}

function mapStateToProps(state) {
    const {articles, articlesFilters: {selected, range }} = state

    let selectedIds = selected.map(item => item.value)

    let filteredArticles = articles.filter(article => {
        let selectedArticles = !selected.length || selectedIds.includes(article.id)

        let articlesInRange = !range.from || !range.to || isDateInRange(article.date, range.from, range.to)

        return selectedArticles && articlesInRange
    })

    return ({
        articles: filteredArticles
    })
}

export default connect(mapStateToProps)(ArticleList)