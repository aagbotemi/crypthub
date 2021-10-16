import React, { useEffect, useState } from 'react'


const ProgressBar = props => (
  <div style={{ display: 'block', width: `${props.percentage}%`, height: 4, backgroundColor: 'blue' }} />
);

const Loading = () => {
    const [state, setState] = useState({
        percentage: 0,
    })

    useEffect(() => {
        const perc = setInterval(() => {
            let nextPercent = state.percentage+1;
            if (nextPercent >= 100) {
                nextPercent = 0;
            }
            setState({ percentage: nextPercent });
        }, 100);
        return () => clearInterval(perc)
    }, [state.percentage])

    return (
        // <LinearProgress />
        <div>
            <ProgressBar percentage={state.percentage} />
        </div>
    )
}

export default Loading

// import * as React from 'react';
// import Box from '@mui/material/Box';
// import LinearProgress from '@mui/material/LinearProgress';

// export default function LinearIndeterminate() {
//   return (
//     <Box sx={{ width: '100%' }}>
//       <LinearProgress />
//     </Box>
//   );
// }
