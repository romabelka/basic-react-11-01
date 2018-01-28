import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Article from './Article'
import Accordion from './common/Accordion'

class ArticleList extends Accordion {
    render() {
        console.log('this.props ArticleList--', this.props)
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

const isRange = (date, from, to) => {
    const dateWithoutTime = date && new Date(date.getFullYear(), date.getMonth(), date.getDate())
    const fromWithoutTime = from && new Date(from.getFullYear(), from.getMonth(), from.getDate())
    const toWithoutTime = to && new Date(to.getFullYear(), to.getMonth(), to.getDate())

    if (toWithoutTime) {
      return dateWithoutTime >= fromWithoutTime && dateWithoutTime <= toWithoutTime
    } else if (fromWithoutTime) {
      return dateWithoutTime.getTime() == fromWithoutTime.getTime()
    }
    return true
  }

const mapStateToProps = ({articles, filters}) => {
    console.log('--', filters)
    return {
        articles: articles
        .filter(article => {
            if (filters.selectedArticle && filters.selectedArticle.length) {
                return filters.selectedArticle.some(i=>{
                    return i.value === article.id
                })
            }
            return true
        })
        .filter(article => {
            if (filters.dateRange) {
                const {from, to} = filters.dateRange
                return isRange(new Date(article.date), from, to)
            }
        })
    }
}

export default connect(mapStateToProps)(ArticleList)