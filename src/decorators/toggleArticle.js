//decorator === HOC
import React from 'react'

export default (OriginalComponent) => class DecoratedComponent extends React.Component {
    state = {
        error: null,
        openArticleId: null
    }

    render() {
        return <OriginalComponent {...this.props} {...this.state} toggleOpen = {this.toggleOpenArticle}/>
    }

    toggleOpenArticle = (openArticleId) => {
        this.setState(state => {
            return {
                openArticleId: openArticleId === state.openArticleId ? null : openArticleId
            }
        })
    }
}