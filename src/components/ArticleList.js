import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import catchError from '../decorators/catchError'
import toggleOpenItem from '../decorators/toggleOpenItem'
// ------------------ HOC через наследование ------------------
// import ToggleOpenItemComponent from './ToggleOpenItemComponent'
// ------------------ HOC через наследование ------------------

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired,
    error: PropTypes.string,
    itemId: PropTypes.string,
    toggleOpenArticle: PropTypes.func,
}

function ArticleList(props) {
    if (props.error) return <h2>Some error</h2>
    const {toggleOpenItem: toggleOpenArticle, itemId: openAricleId} = props
    const articleElements = props.articles.map((article, index) => <li key = {article.id}>
        <Article article = {article}
                    defaultOpen = {index === 0}
                    isOpen = {article.id === openAricleId}
                    onButtonClick = {toggleOpenArticle}
        />
    </li>)
    return (
        <ul>
            {articleElements}
        </ul>
    )
}

export default catchError(toggleOpenItem(ArticleList))

// ------------------ HOC через наследование ------------------
// class ArticleList extends ToggleOpenItemComponent {
//     render() {
//         if (this.state.error) return <h2>Some error</h2>

//         const articleElements = this.props.articles.map((article, index) => <li key = {article.id}>
//             <Article article = {article}
//                      defaultOpen = {index === 0}
//                      isOpen = {article.id === this.state.itemId}
//                      onButtonClick = {this.toggleOpenItem}
//             />
//         </li>)
//         return (
//             <ul>
//                 {articleElements}
//             </ul>
//         )
//     }
// }

// export default ArticleList
// ------------------ HOC через наследование ------------------