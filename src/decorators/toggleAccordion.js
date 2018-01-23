import React from 'react'

export default (OriginalComponent) => class DecoratedAccordion extends React.Component {
    state = {
        openItemId: null
    }

    toggleOpenArticle = (openItemId) => () => this.setState({ openItemId })

    render() {
        return <OriginalComponent {...this.props} {...this.state} toggleOpenArticle = {this.toggleOpenArticle} />
    }
}