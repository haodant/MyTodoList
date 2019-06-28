import React from 'react';

export class CurrentDate extends React.Component {
    constructor() {
        super();

        var today = new Date(),
            currentDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

        this.state = {
            date: currentDate
        };
    }

    render() {
        return (
            <div className='date center white-text'>
                {this.state.date}
            </div>
        );
    }
}
