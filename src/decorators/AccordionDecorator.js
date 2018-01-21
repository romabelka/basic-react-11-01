import React from 'react'

export default (OriginalComponent) => class DecoratedComponent extends React.Component {
  state = {
      error: null,
      openArticleId: null
  }

  toggleOpenArticle = (openArticleId) => {
    openArticleId === this.state.openArticleId ? this.setState({ openArticleId: null }) : this.setState({ openArticleId });
  }

  render() {
      return <OriginalComponent {...this.props} {...this.state} />
  }
}
