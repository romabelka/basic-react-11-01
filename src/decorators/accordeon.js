import React, { Component } from 'react'

export default (OriginalComponent) => class DecoratedComponent extends Component {
  state = {
    itemId: null
  }
  
  toggleItem = (itemId) => {
    this.setState({
    
    })
    
    
    if (itemId === this.state.itemId) {
      this.setState({
        itemId: null
      })
    }
    else {
      this.setState({itemId})
    }
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