import React, {Component} from 'react'

export default class ArticleListWrapper extends Component {
  state = {
    openArticleId: null
  }

  toggleOpenArticle = (openArticleId) => () => {
    const newOpenArticleId = this.state.openArticleId !== openArticleId ? openArticleId : null
    this.setState({ openArticleId: newOpenArticleId })
  }

  render() {
    return null
  }
}
