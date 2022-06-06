import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js";
import { Bar} from "react-chartjs-2"

const Profile = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    // Title,
    Tooltip
    // Legend
  );

  const options = {
    responsive: true,
    // plugins: {
    // legend: {
    //   position: "top",
    // },
    // title: {
    //   display: true,
    //   text: "Chart.js Bar Chart",
    // },
    // },
    scales: {
      y: {
        display: false,
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  const labels = [
    "Sat",
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri"

  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [900, 290, 90, 780, 890, 100, 200],
        backgroundColor: "#7950f2",
        borderRadius: 100,
        barPercentage: 0.3,
        borderSkipped: false,
      },
    ],
  };

  return (


      <Bar options={options} data={data} />

  );
};

export default Profile;