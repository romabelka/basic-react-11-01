import React from 'react';

export default (OriginalComponent) => class DecoratedComponent extends React.Component {
    state = {
        openArticleId: null
    }

    toggleOpenArticle = (openArticleId) => () => {
        this.setState({ openArticleId: openArticleId !== this.state.openArticleId ? openArticleId : null });
    }

    render() {
        return <OriginalComponent {...this.props} {...this.state} toggleOpenArticle = {this.toggleOpenArticle}/>
    }
}