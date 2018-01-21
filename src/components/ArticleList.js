import React, { Component } from 'react'
import Article from './Article'
import toggleOpenItem from '../decorators/toggleOpenItem';
import PropTypes from 'prop-types';
//import ToggleOpenedItem from "./ToggleOpenedItem";

function ArticleList(props) {
  if (props.error) return <h2>Some error</h2>;

  const {toggleOpenItem, currentItemId} = props;

  const articleElements = props.articles.map((article, index) => <li key = {article.id}>
    <Article article={article}
             defaultOpen={index === 0}
             isOpen={article.id === currentItemId}
             onButtonClick={toggleOpenItem}
    />
  </li>);

  return (
    <ul>
      {articleElements}
    </ul>
  );
}

/* Наследование */
/*class ArticleList extends ToggleOpenedItem {
    render() {
      if (this.props.error) return <h2>Some error</h2>;

      const {toggleOpenItem, currentItemId} = this.props;

      console.log('props', this.props);
      const articleElements = this.props.articles.map((article, index) => <li key = {article.id}>
        <Article article={article}
                 defaultOpen={index === 0}
                 isOpen={article.id === currentItemId}
                 onButtonClick={toggleOpenItem}
        />
      </li>);

      return (
        <ul>
          {articleElements}
        </ul>
      );
    }
}*/


ArticleList.propTypes = {
  currentItemId: PropTypes.string,
  toggleOpenItem: PropTypes.func,
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      article: PropTypes.object,
      defaultOpen: PropTypes.bool,
      isOpen: PropTypes.bool,
      onButtonClick: PropTypes.func
    })
  )
};

export default toggleOpenItem(ArticleList)
