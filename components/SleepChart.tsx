"use client";

import React from "react";
import Chart from "react-apexcharts";

const SleepChart = () => {
  const options = {
    labels: ["Type 1", "Type 2", "Type 3"],
    colors: ["#2667FF","#3B28CC","#87BFFF"],
  };

  const series = [40, 30, 30];

  return (
    <div className="w-full">
      <Chart options={options} series={series} type="donut" />
    </div>
  );
};

export default SleepChart;