import React from 'react';

export default class accordeonBehviour extends React.Component {
  state = { itemId: null }

  toggleItem = () => ( _, { id: itemId }) => {
    itemId = this.state.itemId === itemId ? null : itemId;
    this.setState({ itemId });
  }
}