import {
  CategoryScale,
  Chart,
  LinearScale,
  LineElement,
  PointElement,
} from "chart.js";
import millify from "millify";
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
Chart.register(CategoryScale);
Chart.register(LinearScale);
Chart.register(PointElement);
Chart.register(LineElement);

const LineGraph = () => {
  const [data, setData] = useState([]);

  const state = {
    labels: [],
    datasets: [
      {
        label: "Cases",
        data: data,
        fill: true,
        backgroundColor: "red",
      },
    ],
  };

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=all")
      .then((response) => response.json())
      .then((data) => {
        setData(data.cases);
      });
  }, []);
  return (
    <div>
      <h6 className="text-2xl mt-4">Covid 19 Cases</h6>
      <Line
        data={state}
        options={{
          tooltips: {
            mode: "index",
            intersect: false,
            callbacks: {
              label: function (tooltipItem, data) {
                return millify(tooltipItem.value);
              },
            },
          },
        }}
      />
    </div>
  );
};

export default LineGraph;
