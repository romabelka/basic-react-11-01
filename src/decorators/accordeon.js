import React, { Component } from 'react'

export default (OriginalComponent) => class DecoratedComponent extends Component {
  state = {
    itemId: null
  }
  
  toggleItem = (itemId) => {
    this.setState({
      itemId: itemId === this.state.itemId ? null : itemId
    })
  }
  
  render() {
    return (
      <OriginalComponent
        {...this.props}
        {...this.state}
        toggleItem = {this.toggleItem} />
    )
  }
}