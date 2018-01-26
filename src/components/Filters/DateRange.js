import React, { Component } from 'react'
import {connect} from 'react-redux'
import DayPicker, { DateUtils } from 'react-day-picker'
import {selectDateRange} from '../../AC'

import 'react-day-picker/lib/style.css'

class DateRange extends Component {
    handleDayClick = (day) => {
        const {selectDateRange} = this.props
        selectDateRange(DateUtils.addDayToRange(day, this.props))
    }

    render() {
        const { from, to } = this.props
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

export default connect(state => ({
    ...state.range
}), { selectDateRange })(DateRange)
