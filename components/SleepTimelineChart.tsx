"use client";

import { color } from "framer-motion";
import React from "react";
import Chart from "react-apexcharts";

const SleepTimelineChart = () => {
    const options = {
        chart: {
            type: 'bar',
            stacked: true,
            stackType: '100%'
        },
        plotOptions: {
            bar: {
                horizontal: true,
            },
        },
        stroke: {
            width: 1,
            colors: ['#fff']
        },
        xaxis: {
            categories: ['Minutes'],
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val + " Minutes"
                }
            }
        },
        fill: {
            opacity: 1

        }
    };

    const series = [{
        name: 'Light Sleep: 22:00 - 23:30',
        color: "#2667FF",
        data: [90]
    }, {
        name: 'Deep Sleep: 23:30 - 02:00',
        color: "#3B28CC",
        data: [150]
    }, {
        name: 'REM Sleep: 02:00 - 03:00',
        color: "#87BFFF",
        data: [60]
    }, {
        name: 'Light Sleep: 03:00 - 06:00',
        color: "#2667FF",
        data: [180]
    }];

    return (
        <div className="w-full">
            <Chart options={options} series={series} type="bar" />
        </div>
    );
};

export default SleepTimelineChart;