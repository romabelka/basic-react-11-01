import React, { Component } from 'react'
import Article from './Article'
//import toggleOpenArticle from '../decorators/toggleOpenArticle'
import toggleOpenClass from '../decorators/toggleOpenArticleClass'

// function ArticleList(props) {
//     const{openArticleId, toggleOpenArticle} = props;
//     const articleElements = props.articles.map((article, index) => <li key = {article.id}>
//         <Article article = {article}
//             defaultOpen = {index === 0}
//             isOpen = {article.id === openArticleId}
//             onButtonClick = {toggleOpenArticle}
//         />
//     </li>)
//     return (
//         <ul>
//             {articleElements}
//         </ul>
//     )   
// }

// export default toggleOpenArticle(ArticleList);

class ArticleList extends toggleOpenClass {
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

export default ArticleList;

// class ArticleList extends toggleOpenArticle {
//     state = {
//         error: null,
//         openArticleId: null
//     }

//     componentDidCatch(error) {
//         console.log('---', 123, error)
//         this.setState({ error })
//     }

//     render() {
//         if (this.state.error) return <h2>Some error</h2>

//         const articleElements = this.props.articles.map((article, index) => <li key = {article.id}>
//             <Article article = {article}
//                      defaultOpen = {index === 0}
//                      isOpen = {article.id === this.state.openArticleId}
//                      onButtonClick = {toggleOpenArticle}
//             />
//         </li>)
//         return (
//             <ul>
//                 {articleElements}
//             </ul>
//         )
//     }

//     toggleOpenArticle = (openArticleId ) => () => this.setState({ openArticleId: openArticleId === this.state.openArticleId ? null : openArticleId })
// }

