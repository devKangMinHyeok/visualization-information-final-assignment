import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import { Stock } from "stock-data";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const transformData = (stockData: Stock) => {
  const date = new Date(stockData.date);

  return {
    labels: ["open", "high", "low", "close", "adjClose"],
    datasets: [
      {
        label: date.toDateString(),
        data: [
          stockData.open,
          stockData.high,
          stockData.low,
          stockData.close,
          stockData.adjClose,
        ],
        backgroundColor: "rgba(144, 0, 255, 0.2)",
        borderColor: "#6700dd",
        borderWidth: 1,
      },
    ],
  };
};

function RadarChart({ data }: { data: Stock }) {
  const transformedData = transformData(data);
  const options = {
    scales: {
      r: {
        ticks: {
          backdropColor: "transparent",
        },
      },
    },
  };
  return <Radar data={transformedData} options={options} />;
}

export default RadarChart;
