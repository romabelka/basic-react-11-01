import React, {Component} from 'react'

export default (OriginalComponent) => class DecoratedComponent extends Component {
    state = {
        openArticleId: null
    }

    toggleOpenArticle = (openArticleId) => () => {
        const newOpenArticleId = this.state.openArticleId !== openArticleId ? openArticleId : null
        this.setState({ openArticleId: newOpenArticleId })
    }

    render() {
        return <OriginalComponent {...this.props} {...this.state} toggleOpenArticle = {this.toggleOpenArticle} />
    }
}
