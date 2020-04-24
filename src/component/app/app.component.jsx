import React from 'react'
import { ActionBar } from '../action-bar';
import { Calendar } from '../calendar'


const  RemindlyApp = () => {
    return (
        <div>
            <ActionBar/>
            <Calendar/>
        </div>
    )
}

export { RemindlyApp }