import React, { Component } from 'react'


class Accordion extends Component {

    state = {
        openArticleId: null
    }

    toggleOpenArticle = (openArticleId) => this.setState(state => ({ openArticleId: openArticleId === state.openArticleId ? null : openArticleId }))
}

export default Accordion;