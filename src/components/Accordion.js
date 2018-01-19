import React from 'react'

export default (OriginalComponent) => class DecoratedComponent extends React.Component {
    state = {
        isOpen: false
    }

    toggleOpenArticle = (openArticleId) => {
      openArticleId === this.state.openArticleId ? this.setState({ openArticleId: null }) : this.setState({ openArticleId });
    }

    render() {
        return <OriginalComponent {...this.props} {...this.state} toggleOpen = {this.toggleOpen}/>
    }
}
