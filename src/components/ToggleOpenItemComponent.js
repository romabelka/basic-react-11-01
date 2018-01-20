import React, { Component } from 'react'

export default class ToggleOpenItemComponent extends Component {
    state = {
      error: null,
      itemId: null
    }

    toggleOpenItem = (itemId) => {
      this.setState(state => {
        return {
          itemId: itemId === state.itemId ? null : itemId
        }
      })
    }
}