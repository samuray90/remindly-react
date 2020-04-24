import React from 'react';
import moment from 'moment'
import { StyledCalendar } from './calendar.style';

const Calendar = () => {
    const weekdays = Array
    .from({length: 7}, (_, k) => k + 1)
    .map(n => moment().weekday(n).format('dddd'))

    const firstDayInCalendar = moment()
        .startof('isoWeek')
        .date(1)
        .hour(0)
        .minute(0)
        .second(0)
        .substract(
            moment()
                .startof('isoWeek')
                .date(1)
                .hour(0)
                .minute(0)
                .second(0)
                .weekday(),
            'd'
        )
            // .format()
    console.log(firstDayInCalendar)

    const renderCalendarHeader = () => {
        return weekdays.map(day => (
            <div key={day}>{day}</div>
        ))
    }
    return(
        <StyledCalendar>
            {renderCalendarHeader()}
        </StyledCalendar>
    )
}

export { Calendar }