"use client";

import React from "react";
import Chart from "react-apexcharts";

const HRVChart = () => {
    const options = {
        chart: {
            type: "area",
            zoom: {
                enabled: false,
            },
        },
        stroke: {
            curve: "smooth",
        },
        xaxis: {
            categories: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        },
        markers: {
            size: 5,
        },
        dataLabels: {
            enabled: false
        },
        tooltip: {
            x: {
                format: 'dd/MM/yy HH:mm'
            },
        },
    };

    const series = [
        {
            name: "HRV",
            data: [20, 40, 35, 65, 85, 95, 75],
        },
    ];

    return (
        <div className="w-full">
            <Chart options={options} series={series} type="area" />
        </div>
    );
};

export default HRVChart;