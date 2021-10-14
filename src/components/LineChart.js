import React from 'react';
import { Line } from 'react-chartjs-2';


const LineChart = ({ coinHistory, currentPrice, coinName }) => {
    
    console.log(coinHistory);
    console.log(currentPrice);
    console.log(coinName);
    const coinPrice = [];
    const coinTimestamp = [];

    for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
        coinPrice.push(coinHistory?.data?.history[i].price);
    }

    for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
        coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString());
    }

    const data = {
        labels: coinTimestamp,
        datasets: [
            {
                label: 'Price In USD',
                data: coinPrice,
                fill: false,
                backgroundColor: '#0071bd',
                borderColor: '#0071bd',
            },
        ],
    };

    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    };

    return (
        <>
            <div className="chart-header-container">
                <h2 className="chart-title">{coinName} Price Chart </h2>
                <div className="price-container">
                    <h5 className="current-price">Current {coinName} Price: ${currentPrice}</h5>
                    <h5 className="price-change">Change: {coinHistory?.data?.change}%</h5>
                </div>
            </div>
            <Line data={data} options={options} />
        </>
    );
};

export default LineChart;