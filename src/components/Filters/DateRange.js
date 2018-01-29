import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'

import 'react-day-picker/lib/style.css'
import {connect} from "react-redux";
import {filterByDate} from '../../AC'

class DateRange extends Component {
    state = {
        from: null,
        to: null
    }

    handleDayClick = (day) => {
      const { filterByDate } = this.props
      const { from, to } = this.state

      filterByDate(from, to)
      this.setState(DateUtils.addDayToRange(day, this.state))
    }

    render() {
        const { from, to } = this.state
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`

        return (
            <div className="date-range">
                <DayPicker
                    selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                    onDayClick={ this.handleDayClick }
                />
                {selectedRange}
            </div>
        )
    }
}

// export default connect()(DateRange)

export default connect(state => ({
  range: state.range
}), {filterByDate})(DateRange)

