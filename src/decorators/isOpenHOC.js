import React from 'react';

export default (Component) => class isOpenHOC extends React.Component {
	state = {
        openArticleId: null
    }

    toggleOpenArticle = (openArticleId) => () => {
        openArticleId = (openArticleId === this.state.openArticleId)?null:openArticleId
        this.setState({openArticleId})
    }

    isOpen = id => article.id === openArticleId 
    
    static displayName = `isOpenHOC(${Component.displayName || Component.name || 'Component'})`
    render(){
    	return <Component {...this.props} {...this.state} toggleOpenArticle = {this.toggleOpenArticle}/>
    }
}