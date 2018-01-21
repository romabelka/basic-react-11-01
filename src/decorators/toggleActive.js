//decorator === HOC
import React from 'react'

export default (OriginalComponent) => class DecoratedComponent extends React.Component {
    state = {
        activeId: null
    }

    toggleActive = (activeId) => this.setState({ activeId })

    render() {
        return <OriginalComponent {...this.props} {...this.state}
                    toggleActive = {this.toggleActive}
                    activeId = {this.state.activeId}
                />
    }
}
