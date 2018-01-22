import React from 'react'

export default (OriginalComponent) => class DecoratedComponent extends React.Component {

    state = {
        error: null,
        openArticleId: null
    }

    componentDidCatch(error) {
        console.log('---', 123, error)
        this.setState({ error })
    }

    toggleOpenArticle = (openArticleId) => () => {
    this.setState((prevState) => {
            return openArticleId === prevState.openArticleId && this.state.openArticleId !== null ? {openArticleId: null} : { openArticleId }
        })
    }

    render() {
        return <OriginalComponent {...this.props} {...this.state} toggleOpenArticle = {this.toggleOpenArticle} />
    }

}


