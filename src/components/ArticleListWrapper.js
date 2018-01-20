import React, {Component} from 'react'

export default class ArticleListWrapper extends Component {
  state = {
    openArticleId: null
  }

  toggleOpenArticle = (openArticleId) => () => {
    this.setState({ openArticleId })
  }

  render() {
    return null
  }
}
