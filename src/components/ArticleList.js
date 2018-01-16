import React, { Component } from 'react';
import Article from './Article';

export default class ArticleList extends React.Component {
    constructor(props){
        super(props);

    }
    render() {
        const {articles} = this.props;
        const articleElements = articles.map((article) => 
            <li key={article.id}>
                <Article article = {article}/>
            </li>
        );
        return (
            <ul className="ArticleList">
                {articleElements}
            </ul>
        );
    }
}
