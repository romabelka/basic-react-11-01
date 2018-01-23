import React from 'react'

class Accordion extends React.Component {
    state = {
        openArticleId: null
    }

    render() {
        return <span />
    }

    toggleOpenArticle = (openArticleId) => () => {
        this.setState({ openArticleId: this.state.openArticleId !== openArticleId ? openArticleId: null })
    }
}

export default Accordion