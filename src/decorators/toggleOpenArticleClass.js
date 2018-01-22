import React, { Component } from 'react'

export default class toggleOpenClass extends Component {
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
}
