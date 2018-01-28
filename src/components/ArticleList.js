import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Article from './Article'
import Accordion from './common/Accordion'

class ArticleList extends Accordion {
    render() {
        let {articles, from, to, keys} = this.props
        if (!articles.length) return <h3>No Articles</h3>

        articles = articlesFilterByDate(articles, from, to);
        articles = articlesFilterByKeys(articles, keys);

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

function articlesFilterByDate(articles, from, to) {
  if(!from || !to) return articles;

  from = new Date(from);
  to = new Date(to);

  articles = articles.filter(article => {
      let d = new Date(article.date);
      return d > from && d <= to;
  });

  return articles;
}

function articlesFilterByKeys(articles, keys) {
    if (keys.length === 0) return articles;
    return articles.filter(({ id }) => keys.includes(id));
}

ArticleList.defaultProps = {
    articles: []
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired,
    from: PropTypes.instanceOf(Date),
    to: PropTypes.instanceOf(Date),
    keys: PropTypes.array.isRequired,
}

export default connect(state => ({
    articles: state.articles,
    from: state.filter.from,
    to: state.filter.to,
    keys: state.filter.keys,
}))(ArticleList)