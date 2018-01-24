import React, { Component } from 'react';
import RangeDatePicker from '../RangeDatePicker';

import './style.css'

class CommentForm extends Component {
  state = {
    errors: {
      name: true,
      text: true,
    }
  }

  componentDidMount() {
    this.nameField.focus();
  }

  isValidField = (strValue) => {
    return strValue.length > 10 && strValue.length <= 50;
  }

  handleCommentFormChange = (evt) => {
    this.setState({
      errors: Object.assign(this.state.errors, {
        [evt.target.name]: this.isValidField(evt.target.value)
      })
    });
  }

  handleCommentFormSubmit = (evt) => {
    if(Object.values(this.state.errors).includes(false)) {
      alert('There are some errors!');
      // evt.preventDefault();
    }
    evt.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleCommentFormSubmit}>
        <legend style={{textAlign: 'center', fontWeight: 'bold', marginTop: '25px'}}>Place your comment here</legend>
        <label>Name:
          <input type="text" ref={(input) => {this.nameField = input}} name="name" placeholder="Your name"
            onBlur={this.handleCommentFormChange} className={'input' + (this.state.errors.name ? '' : ' error')} />
        </label><br />
        <label>Text:
          <textarea name="text" placeholder="Your comment" onBlur={this.handleCommentFormChange} className={'input' + (this.state.errors.text ? '' : ' error')}></textarea>
        </label>
        <label>Your comment will be visible on these dates:
          <RangeDatePicker lang="ru"/>
        </label>
        <input type="submit" value="Send" />
      </form>
    )
  }
}

export default CommentForm;
