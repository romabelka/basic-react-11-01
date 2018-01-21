import React from 'react'

export default (OriginalComponent) => class DecoratedComponent extends React.Component {
    state = {
        openArticleId: null
    }

    toggleOpenArticle = (openArticleId) => () => {
        this.setState(state => {
            return {
                openArticleId: openArticleId === state.openArticleId ? null : openArticleId
            }
        })
    }

    render() {
        return <OriginalComponent {...this.props} {...this.state} toggleOpenArticle = {this.toggleOpenArticle}/>
    }
}

