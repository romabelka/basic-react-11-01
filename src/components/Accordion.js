import React, { Component } from 'react'

class Accordion extends Component {
    state = {
        openArticleId: null
    }
    toggleOpenArticle = (openArticleId) => () => {
        this.setState({ openArticleId: openArticleId !== this.state.openArticleId ? openArticleId : null });
    }
}
export default Accordion;