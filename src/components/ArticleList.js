import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import toggleOpenArticle from '../decorators/toggleOpenArticle' //аккордеон - декоратор
import toggleOpenClass from '../decorators/toggleOpenArticleClass' //аккордеон - наследование

//Аккордеон - декоратор
function ArticleList(props) {
    const{openArticleId, toggleOpenArticle} = props;
    const articleElements = props.articles.map((article, index) => <li key = {article.id}>
        <Article article = {article}
            defaultOpen = {index === 0}
            isOpen = {article.id === openArticleId}
            onButtonClick = {toggleOpenArticle}
        />
    </li>)
    return (
        <ul>
            {articleElements}
        </ul>
    )   
}

ArticleList.propTypes = {
    articles: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string,
        comments: PropTypes.array
    }).isRequired)
}

export default toggleOpenArticle(ArticleList);

//Аккордеон - наследование
/* class ArticleList extends toggleOpenClass {
    render () {
        const {openArticleId} = this.props;
        const articleElements = this.props.articles.map((article, index) => <li key = {article.id}>
            <Article article = {article}
                defaultOpen = {index === 0}
                isOpen = {article.id === this.state.openArticleId}
                onButtonClick = {this.toggleOpenArticle}
            />
        </li>)
        return (
            <ul>
                {articleElements}
            </ul>
        ) 
    }  
}

export default ArticleList; */

