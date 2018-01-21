//decorator === HOC
import React from 'react'
import PropTypes from 'prop-types'

export default (OriginalComponent) => class DecoratedComponent extends React.Component {
    static propTypes = {
        defaultOpen: PropTypes.bool
    }

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
