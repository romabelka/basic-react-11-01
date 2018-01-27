import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import {connect} from 'react-redux'
import {changeDateRange} from '../../AC'

import 'react-day-picker/lib/style.css'

class DateRange extends Component {
    handleDayClick = (day) => {
        const action = changeDateRange(DateUtils.addDayToRange(day, this.props.filters.dateRange))
        this.props.dispatch(action)
    }

    render() {
        const { from, to } = this.props.filters.dateRange
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

const mapStateToProps = ({filters}) => ({
    filters
})

export default connect(mapStateToProps)(DateRange)