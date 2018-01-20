import React from 'react'

export default (OriginalComponent) => class DecoratedComponent extends React.Component {
  state = {
    itemId: null
  }

  toggleOpenItem = (itemId) => {
    this.setState(state => {
      return {
        itemId: itemId === state.itemId ? null : itemId
      }
    })
  }

  render() {
    return <OriginalComponent {...this.props} {...this.state} toggleOpenItem = {this.toggleOpenItem}/>
  }
}