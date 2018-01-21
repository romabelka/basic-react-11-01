import React from 'react'

export default class ToggleOpenedItem extends React.Component {
  state = {
    currentItemId: null
  };

  toggleOpenItem = (currentItemId) => this.setState(state => {
    return {
      currentItemId: currentItemId === state.currentItemId ? null : currentItemId
    }
  });
}
