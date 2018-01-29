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

function getDate(date) {
    return new Date(date).getTime()
}

function isInDateRange(date, from, to) {
    return getDate(from) <= getDate(date) && getDate(date) <= getDate(to)
}

function mapStateToProps(state) {
    const {articles, select, selectDateRange} = state

    let selectedIds = select ? select.map(item => item.value) : []

    let filteredArticles = articles.filter(article => {
        let articlesInRange = (selectDateRange.from || !selectDateRange.to) ? isInDateRange(article.date, selectDateRange.from, selectDateRange.to) : false

        return selectedIds.includes(article.id) || articlesInRange
    })

    return ({
        articles: filteredArticles.length ? filteredArticles : articles
    })
}
    
export default connect(mapStateToProps)(ArticleList)