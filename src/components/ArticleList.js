import React, { Component } from 'react'
import Article from './Article'

class ArticleList extends Component{
    render() {
        const articleElements = this.props.articles.map((article, index) => <li key={index}>
            <Article article = {article}/>
        </li>)
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}

export default ArticleList