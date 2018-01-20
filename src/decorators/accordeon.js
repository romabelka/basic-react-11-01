import React, {Component} from 'react'

export default (OriginalComponent) => class DecoratedComponent extends Component {
    state = {
        openArticleId: null
    }

    toggleOpenArticle = (openArticleId) => () => {
        this.setState({ openArticleId })
    }

    render() {
        return <OriginalComponent {...this.props} {...this.state} toggleOpenArticle = {this.toggleOpenArticle} />
    }
}
