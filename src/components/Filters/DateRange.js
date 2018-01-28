import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {setFilters} from '../../AC'
import {DATE_RANGE} from '../../constants'

import 'react-day-picker/lib/style.css'

class DateRange extends Component {
    static propTypes = {
        filters: PropTypes.object
    }

    handleDayClick = (day) => {
        const action = setFilters(DATE_RANGE, {
            selectedArticle: this.props.filters.selectedArticle,
            dateRange: DateUtils.addDayToRange(day, this.props.filters.dateRange)
        })
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

export default connect(({filters}) => ({filters}))(DateRange)