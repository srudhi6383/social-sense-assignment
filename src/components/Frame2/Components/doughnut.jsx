"use client"
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useState } from "react";
import { Button } from "../../Ui/button";

ChartJS.register(ArcElement, Tooltip, Legend);

const generateRandomData = (base, variance) => {
  return Array.from({ length: 4 }, () =>
    Math.floor(base + Math.random() * variance)
  );
};

const DoughnutChart = () => {
  const [data,setData] = useState({
    labels: [
      "15-25 Years Old",
      "26-35 Years Old",
      "36-45 Years Old",
      ">45 Years Old",
    ],
    datasets: [
      {
        label: "Customer Segmentations",
        data: [80, 15, 35, 15], // Example data
        backgroundColor: [
          "rgba(255, 209, 86, 0.9)",
          "rgba(172, 215, 23, 0.5)",
          "rgba(165, 42, 42, 0.5)",
          "rgba(75, 192, 192, 0.8)",
        ],
        borderColor: [
          "rgba(255, 205, 86, 1)",
          "rgba(173, 216, 230, 1)",
          "rgba(165, 42, 42, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  });


  const handleUpdate=()=>{
    setData({
      labels: [
        "15-25 Years Old",
        "26-35 Years Old",
        "36-45 Years Old",
        ">45 Years Old",
      ],
      datasets: [
        {
          label: "Customer Segmentations",
          data: generateRandomData(50,50),
          backgroundColor: [
            "rgba(255, 205, 86, 0.8)",
            "rgba(255, 159, 64, 0.8)",
            "rgba(54, 162, 235, 0.8)",
            "rgba(75, 192, 192, 0.8)",
          ],
          borderColor: [
            "rgba(255, 205, 86, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(75, 192, 192, 1)",
          ],
          borderWidth: 1,
        },
      ],
    });
  }


  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const label = context.label || "";
            const value = context.raw || "";
            const percentage = (
              (value / data.datasets[0].data.reduce((a, b) => a + b, 0)) *
              100
            ).toFixed(2);
            return `${label}: ${percentage}%`;
          },
        },
      },
    },
  };

  return (
    <div className="w-4/5 h-fit bg-white rounded-2xl shadow-lg grid">
      <Doughnut data={data} options={options} width={"80%"} height={"100%"} />
      
    </div>
  );
};

export default DoughnutChart;
