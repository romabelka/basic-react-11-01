import React, { Component } from 'react'

export default class CommentForm extends Component {
  state = {
    name: '',
    text: ''
  }

  handleInputChange = (ev) => {
    const name = ev.target.name
    const value = ev.target.value
    const length = ev.target.dataset.length
    if (value.length > length) return

    this.setState({[name]: value});
  }

  render () {
    return (
      <div>
        <div>
          <label>
            <div>Name</div>
            <input 
              type="text" 
              placeholder="Enter your name" 
              name="name"
              value = {this.state.name}
              data-length = "10"
              onChange = {this.handleInputChange}/>
          </label>
        </div>
        <div>
          <label>
            <div>Comment text</div>
            <textarea 
              placeholder="Enter your commentary" 
              name="text"
              data-length = "50"
              rows="3"
              cols="200"
              value = {this.state.text}
              onChange = {this.handleInputChange}/>
          </label>
        </div>
      </div>
    )
  }
}
