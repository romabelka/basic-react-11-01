import React, {Component} from 'react'
import PropTypes from 'prop-types'
import DayPicker, { DateUtils } from 'react-day-picker';
import Select from 'react-select'

import 'react-select/dist/react-select.css'
import 'react-day-picker/lib/style.css';
import './styles.css'

export default class ArticlesFilter extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired
  }

  static defaultProps = {
    numberOfMonths: 2
  }

  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
    this.state = this.getInitialState();
  }

  state = {
    selected: null,
  }

  getInitialState() {
    return {
      from: undefined,
      to: undefined,
    };
  }

  handleDayClick(day) {
    const range = DateUtils.addDayToRange(day, this.state);
    this.setState(range);
  }

  handleResetClick() {
    this.setState(this.getInitialState());
  }

  handleChange = selected => this.setState({ selected })

  render () {
    const {articles} = this.props;
    const { from, to } = this.state;
    const modifiers = { start: from, end: to };
    const selectOptions = articles.map(article => ({
      label: article.title,
      value: article.id
    }))
    return (
      <div>
        <Select options = {selectOptions} value = {this.state.selected} onChange = {this.handleChange} multi />
        <div className="RangeExample">
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
            numberOfMonths={this.props.numberOfMonths}
            selectedDays={[from, { from, to }]}
            modifiers={modifiers}
            onDayClick={this.handleDayClick}
          />
        </div>
      </div>
    )
  }
}
