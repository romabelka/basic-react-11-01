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
    const d = new Date(date)
    d.setHours(0,0,0,0)
    return d
}

function cmpDates(firstDate, secondDate) {
    return (getDate(firstDate)).getTime() <= (getDate(secondDate)).getTime()
}

function mapStateToProps(state) {
    let { articles, filters: { selected, range } } = state
    return {
        articles: articles.filter((article) => {
            let isSelected = !selected.ids.length ||
                            !!~selected.ids.indexOf(article.id)
            let isInRange = !range.from || !range.to ||
                            (cmpDates(range.from, article.date) &&
                            cmpDates(article.date, range.to))
            return isSelected && isInRange
        })
    }
}

export default connect(mapStateToProps)(ArticleList)
