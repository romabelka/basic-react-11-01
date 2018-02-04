import React, { Component } from 'react'
import {openArticle} from '../../AC'
import store from '../../store'

class Accordion extends Component {
    state = {
        openItemId: this.props.defaultOpenItemId
    }

    toggleOpenItem = openItemId => ev => {
        store.dispatch(openArticle(openItemId === this.props.openItemId ? null : openItemId))
    }

    toggleOpenItemMemoized = (openItemId) => {
        if (this.memoizedTogglers.get(openItemId)) return this.memoizedTogglers.get(openItemId)
        const toggler = this.toggleOpenItem(openItemId)
        this.memoizedTogglers.set(openItemId, toggler)
        return toggler
    }

    memoizedTogglers = new Map()
}

export default Accordion