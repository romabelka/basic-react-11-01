import React from 'react'

export default (Accordeon) => class DecoratedAccordeon extends React.Component {
    state = {
        openItemId: null
    }

    toggleOpenArticle = (openItemId) => () => {
        this.setState(state => {
            return {
                openItemId: openItemId === state.openItemId ? null : openItemId
            }
        })
    }

    render() {
        return <Accordeon {...this.props} {...this.state} toggleOpenArticle = {this.toggleOpenArticle}/>
    }
}

