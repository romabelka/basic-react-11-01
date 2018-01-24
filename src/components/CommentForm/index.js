import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './style.css';

class CommentForm extends Component {
  static propTypes = {
    name: PropTypes.string,
    text: PropTypes.string
  }

  state = {
    name: '',
    text: '',
    nameValid: true,
    textValid: true,
    submitted: false
  }

  isValidValue = v => {
    const len = v.length;

    return v && len > 10 && len < 50
  }

  onInputChange = ev => {
    const name = ev.target.name;
    const value = ev.target.value;

    this.setState({
      [name]: value,
      [`${name}Valid`]: this.isValidValue(value)
    })
  }

  onFormSubmit = ev => {
    ev.preventDefault();

    const nameValue = this.nameInput.value;
    const textValue = this.textInput.value;

    this.setState({
      submitted: true,
      nameValid: this.isValidValue(nameValue),
      textValid: this.isValidValue(textValue)
    });
  }

  render() {
    const INVALID_CLASS = 'is-invalid';

    return (
      <form onSubmit={this.onFormSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input name="name" type="text" ref={(input) => {this.nameInput = input}} value = {this.state.name} onInput = {this.onInputChange} className = {this.state.submitted && !this.state.nameValid ?  INVALID_CLASS : ''} />
        </div>
        <div>
          <label htmlFor="text">Message:</label><br />
          <textarea name="text" id="" ref={(input) => {this.textInput = input}} cols="30" rows="10" value = {this.state.text} onInput = {this.onInputChange} className = {this.state.submitted && !this.state.textValid ? INVALID_CLASS : ''}></textarea>
        </div>
        <button type="submit">Leave comment</button>
      </form>
    )
  }
}

export default CommentForm;
