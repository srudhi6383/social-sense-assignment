"use client";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useState } from "react";
import { Button } from "../../Ui/button";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const generateRandomData = (base, variance) => {
  return Array.from({ length: 12 }, () =>
    Math.floor(base + Math.random() * variance)
  );
};

const Overview = () => {
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
        backgroundColor: "rgba(220, 220, 220, 0.5)",
        borderColor: "rgba(220, 220, 220, 1)",
        borderWidth: 1,
      },
      {
        label: "Actuals",
        data: generateRandomData(30, 10),
        backgroundColor: "rgba(255, 165, 0, 0.5)",
        borderColor: "rgba(255, 165, 0, 1)",
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
          backgroundColor: "rgba(220, 220, 220, 0.5)",
          borderColor: "rgba(220, 220, 220, 1)",
          borderWidth: 1,
        },
        {
          label: "Actuals",
          data: generateRandomData(30, 10),
          backgroundColor: "rgba(255, 165, 0, 0.5)",
          borderColor: "rgba(255, 165, 0, 1)",
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
        text: "Projections vs Actuals",
      },
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  return (
    <div className="w-[80%] shadow-lg bg-white rounded-2xl p-3 grid">
      <Bar className="border-ye" data={data} options={options} />
      {}
    </div>
  );
};

export default Overview;
