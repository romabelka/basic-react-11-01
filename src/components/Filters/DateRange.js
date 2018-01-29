import React, {Component} from 'react'
import DayPicker, {DateUtils} from 'react-day-picker'
import {connect} from 'react-redux'
import {filterArticlesByRange} from '../../AC'

import 'react-day-picker/lib/style.css'

class DateRange extends Component {
  // state = {
  //   from: null,
  //   to: null
  // }
  
  handleDayClick = (day) => {
    this.props.dispatch(
      filterArticlesByRange(DateUtils.addDayToRange(day, this.props.range))
    )
  }
  
  render() {
    const {from, to} = this.props.range
    console.log('this.props.range', this.props.range)
    const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`
    return (
      <div className="date-range">
        <DayPicker
          selectedDays={day => DateUtils.isDayInRange(day, {from, to})}
          onDayClick={this.handleDayClick}
        />
        {selectedRange}
      </div>
    )
  }
  
}

export default connect((storeState) => ({
  range: storeState.articlesFilters.range,
}))(DateRange)