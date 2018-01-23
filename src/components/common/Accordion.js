import React, { Component } from 'react'

class Accordion extends Component {
    state = {
        openItemId: this.props.defaultOpenItemId
    }

    toggleOpenItem = openItemId => ev => {
        this.setState({
            openItemId: openItemId === this.state.openItemId ? null : openItemId
        })
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