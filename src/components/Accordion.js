import React from 'react'

class Accordion extends React.Component {
    state = {
        openArticleId: null,
        error: null
    }

    componentDidCatch(error) {
        console.log('---', 123, error)
        this.setState({ error })
    }

    render() {
        return <span />
    }

    toggleOpenArticle = (openArticleId) => () => {
        this.setState({ openArticleId: this.state.openArticleId !== openArticleId ? openArticleId: null })
    }
}

export default Accordion