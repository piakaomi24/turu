"use client";

import React from "react";
import Chart from "react-apexcharts";

const SleepChart = () => {
  const options = {
    labels: ["Light Sleep", "Deep Sleep", "REM Sleep"],
    colors: ["#2667FF","#3B28CC","#87BFFF"],
  };

  const series = [270, 150, 60];

  return (
    <div className="w-full">
      <Chart options={options} series={series} type="donut" />
    </div>
  );
};

export default SleepChart;