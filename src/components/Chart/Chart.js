import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const expenseValues = props.dataPoints.map((dataPoint) => {
    return dataPoint.value;
  });
  const maxExpenseValue = Math.max(...expenseValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={maxExpenseValue}
            label={dataPoint.label}
          />
        );
      })}
    </div>
  );
};

export default Chart;
