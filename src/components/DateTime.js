import React, { useEffect, useState } from 'react'
import { calculateTime } from '../utils/calculateTime';

const DateTime = () => {
    const [date, setDate] = useState(calculateTime());

    useEffect(() => {
        const timer = setInterval(() => setDate(calculateTime()), 1000)
        return () => clearInterval(timer)
    })
    return (
        <div className="date-time">
            <div>{date.displayDate}</div>
            <div>{date.displayTime}</div>
        </div>
    )
}

export default DateTime;