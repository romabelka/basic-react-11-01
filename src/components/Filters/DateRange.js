import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'

import 'react-day-picker/lib/style.css'


import {connect} from 'react-redux'
import {selectRangeDateFilter}  from '../../AC'
// подключим наш AC для фильтра даты 

class DateRange extends Component {
    // state = {
    //     from: null,
    //     to: null
    // }

    handleDayClick = (day) => {
         const {selectRangeDateFilter} = this.props
         selectRangeDateFilter( DateUtils.addDayToRange(day, this.props.range ) )        
         
        //              this.setState(DateUtils.addDayToRange(day, this.state))
    }
    render() {
        const { from, to } = this.props.range
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

export default   connect ( state=> ( { range: state.dateRange } ), { selectRangeDateFilter } )(DateRange)