import React from 'react'

export default class AccordionClass extends React.Component {
    state = {
        openArticleId: null
    }

    toggleOpenArticle = (evt, article) => this.setState({
        openArticleId: article.id != this.state.openArticleId ? article.id : null
    });

    render() {
    }
}