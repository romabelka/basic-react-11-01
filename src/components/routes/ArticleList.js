import React, { Component } from 'react'
import ArticleList from '../ArticleList'
import Article from '../Article'
import {Route} from 'react-router-dom'

class ArticleListPage extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <h2>Article list:</h2>
                <ArticleList/>
                <Route path = "/articles/:id" render = {this.getArticle} />
            </div>
        )
    }

    getArticle = ({ match }) => {
        return <Article id = {match.params.id} isOpen key = {match.params.id} />
    }
}

export default ArticleListPage