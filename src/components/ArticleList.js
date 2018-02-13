import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Accordion from './common/Accordion'
import {connect} from 'react-redux'
import {filtratedArticlesSelector, articlesLoadingSelector} from '../selectors'
import {loadAllArticles} from '../AC'
import Loader from './common/Loader'
import {NavLink, withRouter} from 'react-router-dom'

class ArticleList extends Accordion {
    static contextTypes = {
        dictionary: PropTypes.object
    }
    
    componentDidMount() {
        this.props.loadAllArticles()
    }

    render() {
        const {articles, loading} = this.props

        if (loading) return <Loader />
        if (!articles.length) return <h3>{this.context.dictionary.No_Articles}</h3>
        const articleElements = articles.map((article) => <li key={article.id}>
            <NavLink to = {`/articles/${article.id}`} activeStyle = {{color: 'red'}}>{article.title}</NavLink>
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

export default withRouter(connect(state => {
    return {
        articles: filtratedArticlesSelector(state),
        loading: articlesLoadingSelector(state),
//        router: state.router
    }
}, { loadAllArticles }, null, { pure: false })(ArticleList))