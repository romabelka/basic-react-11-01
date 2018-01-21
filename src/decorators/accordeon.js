import React from 'react'

export default (OriginalComponent) => class DecoratedComponent2 extends React.Component {
    state = {
        error: null,
        openArticleId: null
    }

    toggleOpenArticle = (openArticleId) => this.setState({
        openArticleId: (openArticleId === this.state.openArticleId) ? null : openArticleId
    })

    render() {
        return <OriginalComponent {...this.props} {...this.state} toggleOpenArticle = {this.toggleOpenArticle}/>
    }
}
