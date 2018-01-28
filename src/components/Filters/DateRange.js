import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import {connect} from 'react-redux'
import {filterDateRange} from '../../AC'
import Article from '../Article'

import 'react-day-picker/lib/style.css'

class DateRange extends Component {
/*
    state = {
        from: null,
        to: null
    }
*/

//    handleDayClick = (day) => this.setState(DateUtils.addDayToRange(day, this.state))

    handleDayClick = (day) => {

        console.log('handleclick', this.props)
        const {filterDateRange} = this.props
        filterDateRange(DateUtils.addDayToRange(day, this.props))
    }

/*    handleDayClick = () => {
        const {filterDateRange, range} = this.props
        filterDateRange(range)
    }*/

    render() {
//        const { from, to } = this.state
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
/*

const mapStateToProps = (storeState) => ({
    range: storeState.filters
})

export default connect(mapStateToProps)(DateRange)
*/


export default connect(null, { filterDateRange })(DateRange)
