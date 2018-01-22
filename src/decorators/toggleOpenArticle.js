import React, {Component} from 'react'
/*

export default (OriginalComponent) => class DecoratedComponent extends React.Component {
    state = {
        openArticleId: null
    }

    toggleOpenArticle = (openArticleId) => this.setState({openArticleId: this.state.openArticleId !== openArticleId ? openArticleId : null})

    render() {
        return <OriginalComponent {...this.props} {...this.state} toggleOpenArticle = {this.toggleOpenArticle}/>
    }
}*/

class Accordion extends Component {
    state = {
        openArticleId: null
    }

    toggleOpenArticle = (openArticleId) => this.setState({openArticleId: this.state.openArticleId !== openArticleId ? openArticleId : null})

}

export default Accordion