import React from 'react'
import { useState, useEffect } from 'react'

const DateAndClock = ({
    w='130px',
    h='',  
    dateProps = 'px-2', 
    clockProps = 'px-2', 
    generalProps ='p-2 text-center border-1 rounded-lg m-1 border-black' }) => {

    const getFormattedDate = () => {
        const now = new Date();
        const day = String(now.getDate()).padStart(2, '0');
        const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
        const year = now.getFullYear();
        return `${day}/${month}/${year}`;
    };

    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const [date, setDate] = useState(getFormattedDate);

    const UpdateDateAndTime = () => {
        const currTime = new Date().toLocaleTimeString();
        const currDate = getFormattedDate();
        setTime(currTime);

        if (currDate !== date) {
            setDate(currDate);
        }
    }

    useEffect(() => {
        const intervalId = setInterval(UpdateDateAndTime, 1000);
        return () => clearInterval(intervalId);
    }, [date]);

    const containerStyle = `${generalProps}`;

    return (
        <div className={containerStyle} style={{ width: w, height: h }}>
            <h1 className={`${dateProps}`}>{date}</h1>
            <h1 className={`${clockProps}`}>{time}</h1>
        </div>
    )
};

export default DateAndClock;