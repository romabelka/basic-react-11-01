import React from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

class RangeDatePicker extends React.Component {
  state = {
    from: undefined,
    to: undefined,
  }

  handleDayClick = (day) => {
    const range = DateUtils.addDayToRange(day, this.state);
    this.setState(range);
    debugger;
  }

  handleResetClick = () => {
    this.setState({ from: undefined, to: undefined });
  }

  render() {
    const { from, to } = this.state;
    const modifiers = { start: from, end: to };
    return (
      <div className="RangeExample">
        <div>
          <p>
            {!from && !to && 'Please select the first day.'}
            {from && !to && 'Please select the last day.'}
            {from &&
              to &&
              `Selected from ${from.toLocaleDateString()} to
              ${to.toLocaleDateString()}`}{' '}
          </p>
          <DayPicker
            className="Selectable"
            numberOfMonths={this.props.numberOfMonths}
            selectedDays={[from, { from, to }]}
            modifiers={modifiers}
            onDayClick={this.handleDayClick}
          />
          <button type="Button" onClick={this.handleResetClick}>Reset</button>
        </div>
      </div>
    )
  }
}

export default RangeDatePicker;
