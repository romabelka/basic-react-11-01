import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import {connect} from 'react-redux'
import {setFilters} from '../../AC'
import {DATE_RANGE} from '../../constants'

import 'react-day-picker/lib/style.css'

class DateRange extends Component {
    handleDayClick = (day) => {
        const action = setFilters(DATE_RANGE, {
            selectedArticle: this.props.filters.selectedArticle,
            dateRange: DateUtils.addDayToRange(day, this.props.filters.dateRange)
        }, this.props.articles)
        this.props.dispatch(action)
    }

    render() {
        console.log('render dateRange')
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

const mapStateToProps = ({filters, articles}) => ({
    filters,
    articles
})

export default connect(mapStateToProps)(DateRange)