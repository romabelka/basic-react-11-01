//decorator === HOC
import React from 'react'

export default (OriginalComponent) => class DecoratedComponent extends React.Component {
    state = {
        isOpen: this.props.defaultOpen
    }

    toggleOpen = () => this.setState({
        isOpen: !this.state.isOpen
    })

    render() {
        return <OriginalComponent {...this.props} {...this.state} toggleOpen = {this.toggleOpen}/>
    }
}
