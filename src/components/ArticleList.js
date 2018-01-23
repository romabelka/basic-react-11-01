import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
<<<<<<< HEAD
import PropTypes from 'prop-types'
import toggleOpenArticle from '../decorators/toggleOpenArticle'


function ArticleList(props) {

  if (props.error) return <h2>Some error</h2>

   return (
            <div>
              {getBody(props)}
            </div>
        )
}

function getBody({error, articles, openItemID, toggleOpenArticle} = props) {

  const articleElements = articles.map((article, index) => <li key = {article.id}>
          <Article article = {article}
                   defaultOpen = {index === 0}
                   isOpen = {article.id === openItemID}
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
        articles: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired,
          text: PropTypes.string,
          comments: PropTypes.array
        }).isRequired
      ).isRequired
=======
import Accordion from './common/Accordion'

class ArticleList extends Accordion {
    render() {
        const {articles} = this.props
        if (!articles.length) return <h3>No Articles</h3>
        const articleElements = articles.map((article) => <li key={article.id}>
            <Article article={article}
                     isOpen={article.id === this.state.openItemId}
                     toggleOpen={this.toggleOpenItemMemoized(article.id)}
            />
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
>>>>>>> ea4c1ecc0f66bee52e07e5405182d36a6c39aac9
}

export default toggleOpenArticle(ArticleList)
