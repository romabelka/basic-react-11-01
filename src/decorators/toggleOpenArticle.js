import React from 'react'

export default (OriginalComponent) => class AccordionDecorator extends React.Component {

    state = {
        error: null,
        openItemID: null
    }

    componentDidCatch(error) {
        console.log('---', 123, error)
        this.setState({ error })
    }

    toggleOpenArticle = (openItemID) => () => {
    this.setState((prevState) => {
            return openItemID === prevState.openItemID && this.state.openItemID !== null ? {openItemID: null} : { openItemID }
        })
    }

    render() {
        return <OriginalComponent {...this.props} {...this.state} toggleOpenArticle = {this.toggleOpenArticle} />
    }

}


