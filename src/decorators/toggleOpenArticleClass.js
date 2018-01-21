import React, { Component } from 'react'

export default class DecoratorClass extends Component {
    state = {
        openArticleId: null
    }

    toggleOpenArticle = (openArticleId) => {
        this.setState(state => {
            return {
                openArticleId: openArticleId === state.openArticleId ? null : openArticleId
            }
        })
    }
}
