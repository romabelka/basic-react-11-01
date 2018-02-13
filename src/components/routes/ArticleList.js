import React, { Component } from 'react'
import ArticleList from '../ArticleList'
import Article from '../Article'
import {Route} from 'react-router-dom'
import PropTypes from 'prop-types'

class ArticleListPage extends Component {
    static propTypes = {

    }

    static contextTypes = {
        dictionary: PropTypes.object
    }

    render() {
        console.log('---', 2)
        return (
            <div>
                <h2>{this.context.dictionary.Article_list}:</h2>
                <ArticleList/>
                <Route path = {`${this.props.match.path}/:id`} children = {this.getArticle} />
            </div>
        )
    }

    getArticle = ({ match }) => {
        if (!match) return <h2>{this.context.dictionary.Please_select_an_article}</h2>
        console.log('---', 3)
        return <Article id = {match.params.id} isOpen key = {match.params.id} />
    }
}

export default ArticleListPage