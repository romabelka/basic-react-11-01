import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import './style.css';

export default class NewComment extends Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
    this.state = this.getInitialState();
  }
  getInitialState() {
    return {
      from: undefined,
      to: undefined,
      nameValid: '',
      textValid: '',
    };
  }
  handleDayClick(day) {
    const range = DateUtils.addDayToRange(day, this.state);
    this.setState(range);
  }
  handleResetClick() {
    this.setState(this.getInitialState());
  }

  handleNameChange = ev => {
    const user = ev.target.value;
    if (user.length < 10 || user.length > 50) {
      this.setState({ nameValid: 'invalid' });
    }
    else {
      this.setState({ nameValid: '' });
    }
  }

  handleTextChange = ev => {
    const user = ev.target.value;
    if (user.length < 10 || user.length > 50) {
      this.setState({ textValid: 'invalid' });
    }
    else {
      this.setState({ textValid: '' });
    }
  }

  render() {
    const { from, to } = this.state;
    const modifiers = { start: from, end: to };
    return (
      <ul>
        <li>
          <h3><b>New Comment</b></h3>
          <p>Name: <input className={this.state.nameValid} type = "text" onChange = {this.handleNameChange}/></p>
          <p>Text: <textarea className={this.state.textValid} onChange = {this.handleTextChange}/></p>
          <p>
            {!from && !to && 'Please select the first day.'}
            {from && !to && 'Please select the last day.'}
            {from &&
              to &&
              `Selected from ${from.toLocaleDateString()} to
                  ${to.toLocaleDateString()}`}{' '}
            {from &&
              to && (
                <button className="link" onClick={this.handleResetClick}>
                  Reset
                </button>
              )}
          </p>
          <DayPicker
            className="Selectable"
            numberOfMonths={1}
            selectedDays={[from, { from, to }]}
            modifiers={modifiers}
            onDayClick={this.handleDayClick}
          />
        </li>
      </ul>
    )
  }
}
