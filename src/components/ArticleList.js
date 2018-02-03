import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import Accordion from './common/Accordion'
import {connect} from 'react-redux'
import {articlesSelector} from '../selectors'

class ArticleList extends Accordion {
    render() {
        console.log('---', 'rerendering article list')
        const {articles} = this.props
        if (!Object.keys(articles).length) return <h3>No Articles</h3>

        const articleElements = Object.keys(articles).map(id =>
            <Article id={id} key={id}
                     isOpen={id === this.state.openItemId}
                     toggleOpen={this.toggleOpenItemMemoized(id)}
            />)
        return (
            <div>
                {articleElements}
            </div>
        )
    }
}


ArticleList.defaultProps = {
    articles: {}
}

ArticleList.propTypes = {
    articles: PropTypes.object.isRequired
}

export default connect(state => {
    console.log('---', 'connect updated')
    return {
        articles: articlesSelector(state)
    }
})(ArticleList)