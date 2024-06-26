"use client";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useState } from "react";
import { Button } from "../../Ui/button";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const generateRandomData = (base, variance) => {
  return Array.from({ length: 12 }, () =>
    Math.floor(base + Math.random() * variance)
  );
};

const LineChart = () => {
  const [data, setData] = useState({
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Projections",
        data: generateRandomData(20, 10),
        backgroundColor: "rgba(255, 255, 0, 1)",
        borderColor: "rgba(255, 255, 0, 0.5)",
        borderWidth: 1,
      },
      {
        label: "Actuals",
        data: generateRandomData(30, 10),
        backgroundColor: "rgba(165, 42, 42, 1)",
        borderColor: "rgba(165, 42, 42, 0.5)",
        borderWidth: 1,
      },
    ],
  });

  const handleUpdate = () => {
    setData({
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          label: "Projections",
          data: generateRandomData(20, 10),
          backgroundColor: "rgba(75, 192, 192, 0.5)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
        {
          label: "Actuals",
          data: generateRandomData(30, 10),
          backgroundColor: "rgba(255, 205, 86, 0.5)",
          borderColor: "rgba(255, 205, 86, 1)",
          borderWidth: 1,
        },
      ],
    });
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Total Customers",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="w-11/12 p-4 bg-white rounded-2xl shadow-lg grid ">
      <Line data={data} options={options} />
      
    </div>
  );
};

export default LineChart;
