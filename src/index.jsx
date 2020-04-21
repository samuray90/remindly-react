import React from 'react';
import { render } from 'react-dom';
import { RemindlyApp } from './component/app';
import './font.css'

const renderToDom = () => {
    const remindlyApp = document.querySelector('#remindly-app')
    if(remindlyApp !== null){
        render(
            <RemindlyApp/>,
            remindlyApp
        )
    }
}

renderToDom();

export { renderToDom }
