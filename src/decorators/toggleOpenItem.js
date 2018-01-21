import React from 'react'

export default (OriginalComponent) => class DecoratedComponent extends React.Component {
  state = {
    currentItemId: null
  };

  toggleOpenItem = (currentItemId) => this.setState(state => {
    return {
      currentItemId: currentItemId === state.currentItemId ? null : currentItemId
    }
  });

  render() {
    return <OriginalComponent {...this.props} {...this.state} toggleOpenItem={this.toggleOpenItem}/>
  }
}
