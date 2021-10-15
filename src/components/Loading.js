import React, { useEffect, useState } from 'react'

const Loading = () => {
    const [percentage, setPercentage] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            let nextPercent = percentage + 1;
            if (nextPercent >= 100) {
                nextPercent = 0;
            }
            setPercentage(nextPercent);
        }, 100)

        return () => clearInterval(interval)
    }, [])
    return (
        <div>
            <div style={{ display: 'block', width: `${percentage}%`, height: 4, backgroundColor: '#0079D3' }} />
        </div>
    )
}

export default Loading
