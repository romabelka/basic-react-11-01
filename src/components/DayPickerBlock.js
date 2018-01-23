import React, {Component} from 'react' 
import moment from 'moment';
import Helmet from 'react-helmet';

import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

import { formatDate, parseDate } from 'react-day-picker/moment';

class DayPickerBlock extends Component {
    
  
    state = {
        from: undefined,
        to: undefined,
      }

      componentWillUnmount() {
        clearTimeout(this.timeout);
      }
      focusTo() {
        // Focus to `to` field. A timeout is required here because the overlays
        // already set timeouts to work well with input fields
        this.timeout = setTimeout(() => this.to.getInput().focus(), 0);
      }
      showFromMonth() {
        const { from, to } = this.state;
        if (!from) {
          return;
        }
        if (moment(to).diff(moment(from), 'months') < 2) {
          this.to.getDayPicker().showMonth(from);
        }
      }
      handleFromChange(from) {
        // Change the from date and focus the "to" input field
        this.setState({ from }, () => {
          if (!this.state.to) {
            this.focusTo();
          }
        });
      }
      handleToChange(to) {
        this.setState({ to }, this.showFromMonth);
      }
      render() {
        const { from, to } = this.state;
        const modifiers = { start: from, end: to };

        const data =  (modifiers.start && modifiers.end )  &&  " " + (new Date(modifiers.start)).toDateString() +"-" + (new Date(modifiers.end)).toDateString()
        


        return (
         <div>    
         {data}
         <div className="InputFromTo">

            <DayPickerInput
              value={from}
              placeholder="From"
              format="LL"
              formatDate={formatDate}
              parseDate={parseDate}
              dayPickerProps={{
                selectedDays: [from, { from, to }],
                disabledDays: { after: to },
                toMonth: to,
                modifiers,
                numberOfMonths: 2,
              }}
              onDayChange={this.handleFromChange.bind(this)}
            />{' '}
            —{' '}
            <span className="InputFromTo-to">
              <DayPickerInput
                ref={el => (this.to = el)}
                value={to}
                placeholder="To"
                format="LL"
                formatDate={formatDate}
                parseDate={parseDate}
                dayPickerProps={{
                  selectedDays: [from, { from, to }],
                  disabledDays: { before: from },
                  modifiers,
                  month: from,
                  fromMonth: from,
                  numberOfMonths: 2,
                }}
                onDayChange={this.handleToChange.bind(this)}
              />
            </span>
            <Helmet>
              <style>{`
      .InputFromTo .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
        background-color: #f0f8ff !important;
        color: #4a90e2;
      }
      .InputFromTo .DayPicker-Day {
        border-radius: 0 !important;
      }
      .InputFromTo .DayPicker-Day--start {
        border-top-left-radius: 50% !important;
        border-bottom-left-radius: 50% !important;
      }
      .InputFromTo .DayPicker-Day--end {
        border-top-right-radius: 50% !important;
        border-bottom-right-radius: 50% !important;
      }
      .InputFromTo .DayPickerInput-Overlay {
        width: 550px;
      }
      .InputFromTo-to .DayPickerInput-Overlay {
        margin-left: -198px;
      }
    `}</style>
            </Helmet>
          </div>  </div>
        );
      }

}



export default DayPickerBlock;