import React, { useState, useEffect, useRef } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { TimeValue } from "stock-data";
import formatDate from "@/util/formatDate";
import { LabelItem } from "../../node_modules/chart.js/dist/types/index.d";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Dataset 1",
      data: [1, 2, 3, 1, 4, 5, 1],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

interface HorizontalBarChartProps {
  inputData: TimeValue[];
  borderColor: string;
  backgroundColor: string;
}

function HorizontalBarChart({
  inputData,
  borderColor,
  backgroundColor,
}: HorizontalBarChartProps) {
  const [data, setData] = useState({
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Dataset 1",
        data: [1, 2, 3, 1, 4, 5, 1],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  });

  useEffect(() => {
    if (inputData) {
      const labels = inputData.map((item) => formatDate(item.time));
      const values = inputData.map((item) => item.value);

      setData({
        labels,
        datasets: [
          {
            label: "Profit Rate",
            data: values,
            borderColor,
            backgroundColor,
          },
        ],
      });
    }
  }, [inputData]);

  return (
    <div style={{ height: "100%" }}>
      {
        <Bar
          data={data}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: "top",
              },
              title: {
                display: false,
                text: "Chart.js Bar Chart",
              },
            },
          }}
        />
      }
    </div>
  );
}

export default HorizontalBarChart;
