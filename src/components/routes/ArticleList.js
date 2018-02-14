import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ArticleList from '../ArticleList'
import Article from '../Article'
import {Route} from 'react-router-dom'
import {getLocaleText} from '../utils'

class ArticleListPage extends Component {
    static propTypes = {

    };

    static contextTypes = {
        locale: PropTypes.object
    }

    render() {
        console.log('---', 2)
        return (
            <div>
                <h2>{getLocaleText(this)('Article list') + ':'}</h2>
                <ArticleList/>
                <Route path = {`${this.props.match.path}/:id`} children = {this.getArticle} />
            </div>
        )
    }

    getArticle = ({ match }) => {
        if (!match) return <h2>Please select an article</h2>
        console.log('---', 3)
        return <Article id = {match.params.id} isOpen key = {match.params.id} />
    }
}

export default ArticleListPage